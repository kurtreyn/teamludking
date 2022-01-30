import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import EditProfilePage from './EditProfilePage';
import avatar from '../images/profile-avatar.png';

function Profile({ currentUser }) {
  const [photoURL, setPhotoURL] = useState(avatar);
  return (
    <>
      <Navigation
        currentUser={currentUser}
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
      />
      <EditProfilePage
        currentUser={currentUser}
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
      />
      <div>Profile Page Goes Here</div>
    </>
  );
}

export default Profile;
