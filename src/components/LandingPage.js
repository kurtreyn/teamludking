import React from 'react';
import Login from './Login';
import logo from '../images/icon-lodev.png';

function LandingPage({ user, setUser, currentUser, setCurrentUser }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row landing-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-col">
            <Login
              user={user}
              setUser={setUser}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
