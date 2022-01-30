import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/icon-lodev.png';

function Navigation({ currentUser, photoURL, setPhotoURL, handleShow }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    return signOut(auth);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
    } catch {
      alert('Error');
    }
    setLoading(false);
    navigate('/');
  }
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
              <Nav.Link href="" onClick={handleLogOut}>
                Sign Out
              </Nav.Link>
              <Nav.Link href="" onClick={handleShow}>
                Edit Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="profile-pic">
          {' '}
          <img src={photoURL} alt="profile picture" />
          <p>{`Signed in as: ${currentUser?.email}`}</p>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
