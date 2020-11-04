import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

class Navbars extends Component {
  render() {
    return [
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "#EFE7E7",
          padding: "0",
          width:"100%"
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
          className="nav"
            style={{
              
            }}
          >
            <Nav.Link href="/" className="navli">
              صحفه اصلی
            </Nav.Link>
          
            <Nav.Link href="/about" className="navli">
              درباره ی من
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ];
  }
}

export default Navbars;
