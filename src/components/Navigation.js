import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/icon-lodev.png';

function Navigation() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" onClick="">
                Sign Out
              </Nav.Link>
              <Nav.Link href="" onClick="">
                Edit Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="profile-pic">
          {' '}
          <img src="" alt="profile picture" />
          {/* <p>{`Signed in as: ${user?.email}`}</p> */}
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
