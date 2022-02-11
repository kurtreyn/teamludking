import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Navigation from './Navigation';
import EditProfilePage from './EditProfilePage';

import avatar from '../images/profile-avatar.png';

function Profile({ currentUser, setCurrentUser, photoURL, setPhotoURL }) {
  // const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(currentUser);

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <>
      <Navigation
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
