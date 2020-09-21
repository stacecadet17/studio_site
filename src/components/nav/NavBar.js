import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  changeBackground = (e) => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeBackground);
  }

  render() {
    const scrolled = this.state.scrolled;
    return (
      <Navbar sticky="top" className={scrolled ? "navbar active" : "navbar"}>
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
    );
  }
}

export default NavBar;
