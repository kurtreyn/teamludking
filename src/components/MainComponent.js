import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import './Signup'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import Navigation from './Navigation'

export default function MainComponent() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('currentUser'))
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
    console.log(currentUser)
  }, [])

  return (
    <div>
      {currentUser && (
        <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
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
  )
}
