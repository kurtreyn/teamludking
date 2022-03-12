import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Navigation from "./Navigation";
import EditProfilePage from "./EditProfilePage";

import avatar from "../images/profile-avatar.png";

function Profile({ currentUser, setCurrentUser }) {
  // const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navigation
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleShow={handleShow}
      />
      Profile Page
      {/* MODAL TO EDIT PROFILE IMAGE */}
      <Modal className="modal-window" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfilePage
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Profile;
