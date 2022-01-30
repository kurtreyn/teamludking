import React from 'react';

import Navigation from './Navigation';

function Profile({ currentUser }) {
  return (
    <>
      <Navigation currentUser={currentUser} />
      <div>Profile</div>
    </>
  );
}

export default Profile;
