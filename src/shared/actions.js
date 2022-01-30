import React, { useRef, useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// SIGN UP ----------------
// Custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export function signupUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function handleSignup() {
  setLoading(true);
  try {
    await signupUser(emailRef.current.value, passwordRef.current.value);
  } catch {
    alert('Error');
  }
  setLoading(false);
}

// LOG OUT ----------------
export function logOut() {
  return signOut(auth);
}

export async function handleLogOut() {
  setLoading(true);
  try {
    await logOut();
  } catch {
    alert('Error');
  }
  setLoading(false);
}

// LOG IN ----------------
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function handleLogIn() {
  setLoading(true);
  try {
    await signIn(emailRef.current.value, passwordRef.current.value);
  } catch {
    alert('Error');
  }
  setLoading(false);
}
