import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { login } from '../firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

function Login({ currentUser, setCurrentUser }) {
  const { register, handleSubmit, reset } = useForm()
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    let userLogin
    setLoading(true)
    try {
      userLogin = await login(data)
      reset()
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
    if (userLogin) {
      console.log({ ...userLogin.multiFactor.user })
      setCurrentUser({ ...userLogin.multiFactor.user })
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ ...userLogin.multiFactor.user })
      )
    } else {
      setLoading(false)
    }
  }

  const formClassName = `ui form ${isLoading ? 'loading' : ''}`

  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign In</h2>

              <Form className={formClassName}>
                <Form.Group id="email" placeholder="email">
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
        </div>
      </div>
    </div>
  )
}

export default Login
