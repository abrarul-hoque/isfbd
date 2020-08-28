import React from 'react';
import './Manubar.css';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from "../../resource/logo/logo.png"


const Manubar = () => {
   
    

    return (
        <div className="container">
            <Navbar expand="lg"  className="topNavItem sticky-top">
                <Navbar.Brand href="/home"> <img className="logo" src={Logo} alt="Hot Onion Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" id="nav">
                        <Nav.Link className="nav-link active" href="/home">HOME</Nav.Link>
                        <Nav.Link className="nav-link" href="/about">ABOUT US</Nav.Link>
                        <Nav.Link className="nav-link" href="/team">TEAM</Nav.Link>
                        <Nav.Link className="nav-link" href="/scholarship">INTERNATIONAL SCHOLARSHIP</Nav.Link>
                        {/* <Nav.Link className="nav-link" href="/representative">REPRESENTATIVE</Nav.Link> */}
                        <Nav.Link className="nav-link" href="/registration">REGISTRATION</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Manubar;