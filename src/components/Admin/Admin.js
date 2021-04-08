import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddBook from '../Addbook/AddBook';
import "./Admin.css";

const Admin = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
            <div className="bookshop">
                <h3>BOOK SHOP</h3>
                <div>Manage book</div>
                <div>Add Book</div>
                <div>Edit book</div>
            </div>
        </Col>
        <Col sm={8}>
            <div className="addbook">
                <AddBook></AddBook>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
