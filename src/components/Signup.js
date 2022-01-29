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

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  // SIGN UP ----------------
  // Custom hook
  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
      return unsub;
    }, []);

    return currentUser;
  }

  function signupUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function handleSignup() {
    setLoading(true);
    try {
      await signupUser(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error');
    }
    setLoading(false);
  }
  // SIGN UP ----------------

  // LOG OUT ----------------
  function logOut() {
    return signOut(auth);
  }

  async function handleLogOut() {
    setLoading(true);
    try {
      await logOut();
    } catch {
      alert('Error');
    }
    setLoading(false);
  }
  // LOG OUT ----------------

  // LOG IN ----------------
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function handleLogIn() {
    setLoading(true);
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error');
    }
    setLoading(false);
  }

  // LOG IN ----------------

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <h4>{`Signed in as ${currentUser?.email}`}</h4>
          <Form onSubmit="">
            <Form.Group id="email" placeholder="email">
              <Form.Control
                type="email"
                placeholder="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Control
                type="password"
                placeholder="password"
                ref={passwordRef}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100 mt-2 btn-log-in"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <p>
            {/* <Link to="/signin">Sign In</Link> */}
            <Button onClick={handleLogOut}>Sign Out</Button>
            <Button onClick={handleLogIn}>Log In</Button>
          </p>
        </div>
      </Card>
    </>
  );
}

export default Signup;
