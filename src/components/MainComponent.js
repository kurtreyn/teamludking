import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import './Signup';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

export default function MainComponent() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/signup"
          element={
            <Signup currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Profile
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
    </div>
  );
}
