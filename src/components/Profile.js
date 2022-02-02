import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

function Profile({ currentUser, setCurrentUser }) {
  return (
    <>
      <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
      Profile
    </>
  );
}

export default Profile;
