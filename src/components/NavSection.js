//import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
//import { farleftToBracket } from '@fortawesome/free-solid-svg-icons';
//import Login from '../pages/LoginPage';
function CollapsibleNav() {
    ReactSession.setStoreType("sessionStorage");
    const uemail = ReactSession.get("myemail");
    // const [islogin, setLogin] = useState(false);
    let loginbutton;
    const handleLogout = () => {
        
        alert('Successfully logout');
        sessionStorage.clear();
    }
    if(uemail){
        
        loginbutton = <><NavDropdown title={uemail} id="collasible-nav-dropdown"><NavDropdown.Item href="/profile">Profile</NavDropdown.Item><NavDropdown.Item href="/orders">My Orders</NavDropdown.Item><NavDropdown.Item href="/"  onClick={handleLogout}>Logout</NavDropdown.Item> 
      </NavDropdown></>
    //   <Nav.Link href='/' onClick={handleLogout}>Logout <FontAwesomeIcon icon={faRightToBracket} /></Nav.Link>
    } else {
        loginbutton = <><Link to='/login' className="nav-link"><FontAwesomeIcon icon={faUser} /> Login</Link><Link to='/signup' className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> SignUp</Link></>
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/">Smart Wash</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' className="nav-link">Home</Link>
          {/* <Link to='/Admin' className="nav-link">Admin</Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> sessionStorage.removeItem('Username');
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            
            {/* <Link to='/' className="nav-link">{uemail}</Link> */}
            {loginbutton}
            
            
          {/* <Link to='/login' className="nav-link">Login</Link> */}
          {/* <Link to='/signup' className="nav-link">SignUp</Link> */}
            {/* <Nav.Link href="/LoginPage">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Signup
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNav;