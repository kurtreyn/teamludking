import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import "./Signup";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";
import { getProfile } from "../firebase/auth";
import avatar from "../images/profile-avatar.png";

export default function MainComponent() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );
  useEffect(() => {
    if (currentUser?.photoURL) {
      console.log("user changed");
      setCurrentUser(getProfile());
    }
  }, [currentUser.photoURL]);

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
        <Route
          exact
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
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
