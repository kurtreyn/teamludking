import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    navigate('/profile');
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>

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
              onClick={handleLogIn}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <p>
            Need an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </Card>
    </>
  );
}

export default Login;
