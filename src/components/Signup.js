import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { signup, login } from '../firebase/auth';

function Signup(props) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let newUser;
    setLoading(true);
    try {
      console.log(data);
      newUser = await signup(data);
      reset();
      navigate('/profile');
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    if (newUser) {
      console.log(newUser);
    } else {
      setLoading(false);
    }
  };

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`;

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>

              <Form className={formClassName}>
                <Form.Group id="first-name" className="mt-2">
                  <Form.Control
                    type="text"
                    placeholder="first name"
                    required
                    {...register('firstName')}
                  />
                </Form.Group>
                <Form.Group id="last-name" className="mt-2">
                  <Form.Control
                    type="text"
                    placeholder="last name"
                    required
                    {...register('lastName')}
                  />
                </Form.Group>
                <Form.Group id="email" className="mt-2">
                  <Form.Control
                    type="email"
                    placeholder="email"
                    required
                    {...register('email')}
                  />
                </Form.Group>
                <Form.Group id="password" className="mt-2">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    required
                    {...register('password')}
                  />
                </Form.Group>

                <Button
                  disabled={isLoading}
                  className="w-100 mt-2 btn-log-in"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Signup;
