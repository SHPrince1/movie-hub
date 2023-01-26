import React, { useState } from "react";

import { FaHotjar, FaPhotoVideo } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

// import Container from "react-bootstrap/Container";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import style from "../styles/navbar.module.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className={style.navBox}>
        <Container>
          <Navbar.Brand href="/" className={style.linkHead}>
            MoviesHubs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={style.linkText}>
                <FaPhotoVideo /> Movies
              </Nav.Link>
              <Nav.Link href="/trendings" className={style.linkText}>
                {" "}
                <FaHotjar /> Trandings
              </Nav.Link>
              <Nav.Link href="/tvseries" className={style.linkText}>
                {" "}
                <SlScreenDesktop /> TV-Series
              </Nav.Link>
              <Nav.Link href="/search" className={style.linkText}>
                {" "}
                <FiSearch /> Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;
