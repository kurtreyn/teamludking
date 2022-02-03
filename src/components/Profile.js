import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Navigation from './Navigation';
import EditProfilePage from './EditProfilePage';

import avatar from '../images/profile-avatar.png';

function Profile({ user, setUser, currentUser, setCurrentUser }) {
  const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navigation
        user={user}
        setUser={setUser}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
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
            user={user}
            setUser={setUser}
            currentUser={currentUser}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Profile;
