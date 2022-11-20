import gql from 'graphql-tag';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@apollo/react-hooks';
import NavBar from "../components/NavBar";

const Register = () => {
    const [values,setValues]=useState({
        username: '',
        email: '',
        password: '',
        // confirmPassword: ' ',
    });
    
    const onChange=(event)=>{
        setValues({...values,[event.target.name]: event.target.value});
    };
    
    const [addUser, {loading}]= useMutation(REGISTER_USER ,{
        update(proxy, result) {
            console.log(result);
        },
        variables: values
    });
    
    const onSubmit=(event)=>{
       event.preventDefault();
    //    addUser();
    };
            
    return (
        <div>
            <NavBar />
            <h1>Register Page</h1>
            <Form onSubmit={onSubmit} noValidate>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" value={values.username} onChange={onChange} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={values.email} onChange={onChange} />
                    
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={onChange} />
                </Form.Group>
                {/* <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="password" value={values.confirmPassword} onChange={onChange} />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}


const REGISTER_USER= gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        # $confirmPassword: String!
    ){
        register(
            registerInput:{
                username: $username
                email: $email
                password: $password
                # confirmPassword: $confirmPassword
            }
        )
    }{
        id
        email
        username
        createdAt
        token
    }
`;

export default Register;