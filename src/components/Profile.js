import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Navigation from './Navigation';
import EditProfilePage from './EditProfilePage';
import avatar from '../images/profile-avatar.png';

function Profile({ currentUser }) {
  const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navigation
        currentUser={currentUser}
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
        handleShow={handleShow}
      />

      <div>Profile Page Goes Here</div>
      <div>
        {' '}
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
          <Modal.Footer>
            {/* <Button variant="primary" onClick={createPost}>
              Post
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Profile;
