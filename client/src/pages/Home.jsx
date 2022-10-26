import React, { useContext } from "react";
import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery, gql } from "@apollo/client";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FETCH_POSTS_QUERY } from '../util/graphql.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostCard from "../components/PostCard";

function Home() {
  const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    console.log(data.getPosts);
  }
  // const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
  // if(data){
  //   console.log(data);
  // }



  // const posts = data.getPosts;
  //  console.log(posts);
  return (
    <div>
      <NavBar />
      <h1> Recent Posts</h1>

      {loading ? (
        <h1>Loading Posts..</h1>
      ) : (
        data.getPosts && data.getPosts.map((post) => {
          <ul >
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          </ul>
        })
      )}



    </div>
  );
}

export default Home;