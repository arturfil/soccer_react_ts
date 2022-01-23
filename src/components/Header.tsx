import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar style={{backgroundColor: '#2288ff'}}>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
