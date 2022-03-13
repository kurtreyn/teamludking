import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditProfilePage from "./EditProfilePage";

function Profile({ currentUser, setCurrentUser }) {
  // const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      Profile Page
      {/* MODAL TO EDIT PROFILE IMAGE */}
      <button href="" onClick={handleShow}>
        Edit Profile
      </button>
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
