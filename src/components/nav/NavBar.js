import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Nancy Doizé School of Dance</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Class Information</Nav.Link>
            <Nav.Link href="#pricing">Artistic Staff</Nav.Link>
            <Nav.Link href="#pricing">Doizé Dream Team</Nav.Link>
            <Nav.Link href="#pricing">Information &amp; Forms</Nav.Link>
            <Nav.Link href="#pricing">About the Studio</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
