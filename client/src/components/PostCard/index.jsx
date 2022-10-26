import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

function PostCard({ post: { body, createdAt, id, username, likeCount } }) {
    return (
        <Row xs={2} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                
                    <Card>
                    <Card.Img variant="top" className="card-img" src="https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000" />
                        <Card.Body>
                        
                            <Card.Title>{username}</Card.Title>
                            <Card.Link href={`/posts/${id}`}> {moment(createdAt).fromNow(true)}</Card.Link>
                           
                            <Card.Text>
                                {body}
                            </Card.Text>
                            <Card.Body>
                                <Button variant="primary">Like {likeCount}</Button>
                                <Button variant="primary">Comment</Button>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

    );
}

export default PostCard;
