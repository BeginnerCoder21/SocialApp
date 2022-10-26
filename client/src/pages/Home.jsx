import React, { useContext } from 'react';
// import { useQuery } from '@apollo/react-hooks';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from '../util/graphql.js';

function Home () {
  const {
    loading,
    data: { getPosts: posts }
  } = useQuery(FETCH_POSTS_QUERY);

    if (posts) {
        console.log(posts);
    }
    return (
        <div>
            <NavBar />
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;