import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
          Book Attic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/admin">Admin</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/orders">Orders</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/deals">Deals</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >
            <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default NavigationBar;
