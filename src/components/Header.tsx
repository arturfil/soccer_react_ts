import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar style={{backgroundColor: '#2288ff'}}>
      <Container>
        <Navbar.Brand href="#home">
          <Navbar.Text>
            <Link to="/">Home</Link>
          </Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/login">Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
