import React from 'react';
import './Manubar.css';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from "../../resource/logo/logo.png"


const Manubar = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
                <Navbar.Brand href="#home"> <img className="logo" src={Logo} alt="Hot Onion Logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link" href="/home">HOME</Nav.Link>
                        <Nav.Link href="/about">ABOUT US</Nav.Link>
                        <Nav.Link href="/get-involved">GET INVOLVED</Nav.Link>
                        <Nav.Link href="/events">EVENTS</Nav.Link>
                        <Nav.Link href="/news">NEWS</Nav.Link>
                    </Nav> 
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Manubar;