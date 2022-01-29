import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

export default function MainComponent() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
