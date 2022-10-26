import React, { useContext } from "react";
import { Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import { useQuery, gql } from "@apollo/client";
import { FETCH_POSTS_QUERY } from '../util/graphql.js';
import PostCard from "../components/PostCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

function Home() {
  const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
  if (data) {
    console.log(data);
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
      <h1> Recent Posts </h1>
      <Container>
        
          {loading ? (
            <h1> Loading Posts.. </h1>
          ) : (
            data.getPosts.map((post) => (
              <Row key={post.id} className={post.id}>
              <PostCard post={post} />
              </Row>
            ))
          )}
        
      </Container>
    </div>
  );
}

export default Home;

{/* <ul>
            <li key={post.id}>
            <PostCard post={post} key={post.id} />
            </li>
        </ul> */}