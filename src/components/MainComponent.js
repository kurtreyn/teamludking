import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import './Signup';
import Signup from './Signup';

export default function MainComponent() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<LandingPage />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
