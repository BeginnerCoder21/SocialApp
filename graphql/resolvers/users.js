const { SECRET_KEY } = require('../../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const User = require('../../models/User');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators.js');

function generateToken(user){
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,

    }, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = {
    Mutation: {
        //Login user
        async login(
            _,
            {
                username,
                password,
            }

        ){
            const {errors, valid}= validateLoginInput(username,password);
            if(!valid){
                throw new UserInputError('Errors', {errors});
            }

            const user= await User.findOne({username});
            if(!user){
                errors.general= 'User not found';
                throw new UserInputError('User not found', {errors});
            }
            const match= await bcrypt.compare(password, user.password);
                if(!match){
                    errors.general= 'Wrong credentials';
                throw new UserInputError('Wrong credentials', {errors});
                }
                const token = generateToken(user);
                return {
                    ...user._doc,
                    id: user._id,
                    token
                };
        },

        //Register user
        async register(_, { registerInput: { username, email, password, confirmPassword } }) {
            //1. Validate user data
            const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword);
            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }
            //2. Make sure user doesn't already exists
            const user = await User.findOne({ username });
            if (user) {
                throw new UserInputError('Username already exists', {
                    errors: {
                        username: 'This username already exits'
                    }
                });
            }

            //3. hash password and create authentication token
            password = await bcrypt.hash(password, 12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();
            const token = generateToken(res);
            return {
                ...res._doc,
                id: res._id,
                token
            };
        }
        
    }
};