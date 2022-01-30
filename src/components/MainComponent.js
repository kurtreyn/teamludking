import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

export default function MainComponent() {
  const currentUser = useAuth();

  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
    }, []);

    return currentUser;
  }
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/login"
          element={<Login currentUser={currentUser} />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup currentUser={currentUser} />}
        />
        <Route
          exact
          path="/profile"
          element={<Profile currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
