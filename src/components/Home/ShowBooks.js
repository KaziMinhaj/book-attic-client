import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const ShowBooks = (props) => {
  const { _id, author, book, price, imageURL } = props.book;
  
  return (
    <Card className="card">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{book}</Card.Title>
        <Card.Text>Author :{author}</Card.Text>
        <Card.Text>Price:{price}</Card.Text>
        <Link to={`/book/${_id}`}>
          <Button variant="primary">Buy now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};


export default ShowBooks;
