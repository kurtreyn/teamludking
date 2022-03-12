import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import logo from "../images/icon-lodev.png";
import avatar from "../images/profile-avatar.png";

function Navigation({ currentUser, setCurrentUser, handleShow }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  async function handleLogOut() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setLoading(false);
    navigate("/");
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
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="project-dropdown">
                  Projects
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">
                    Find a project
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Find team members
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">My Projects</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="mentor-dropdown">
                  Mentorships
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1">
                    Find a student
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Find a mentor</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    My Mentorships
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="profile-pic">
          {" "}
          {currentUser.photoURL ? (
            <img src={currentUser?.photoURL} alt="profile picture" />
          ) : (
            <img src={avatar} alt="profile picture" />
          )}
          {/* <p>{`Signed in as: ${user?.email}`}</p> */}
          <p>{`Signed in as: ${currentUser?.displayName}`}</p>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
