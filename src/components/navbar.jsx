import React from "react";

import { FaHotjar, FaPhotoVideo } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

// import Container from "react-bootstrap/Container";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import style from "../styles/navbar.module.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" expand="lg" className={style.navBox}>
        <Container>
          <Navbar.Brand href="/" className={style.linkHead}>
           CountriesHub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={style.linkText}>
                <FaPhotoVideo /> All Countries
              </Nav.Link>
              <Nav.Link href="/trendings" className={style.linkText}>
                {" "}
                <FaHotjar /> Africa
              </Nav.Link>
              <Nav.Link href="/tvseries" className={style.linkText}>
                {" "}
                <SlScreenDesktop /> Euroupe
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
