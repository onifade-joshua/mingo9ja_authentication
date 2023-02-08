import React, { useRef, useState } from 'react';
import "./login.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../contexts/AuthStateListener"
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";



const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn } = useAuth();
    const [error, setError] = useState(" ");
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const logUserIn = useNavigate();
 //Navigating to the App after supplying the right user details useNavigate gives access to the user to log in;
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signIn(emailRef.current.value, passwordRef.current.value)
            logUserIn('/dashboard') //After the user input the right email and password details the user get signed in application;
        } catch {
            setError(`You don't have an account, sign up to log in!`)
        }
        setLoading(false)
    }

    return (
        <>
            <Container className='login'>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                          
                            <h3>Log In</h3>
                            <h6 className="welcome">Login to access your <span className="product-name">Mingo</span>
                                <span className="product-name-1">9</span>
                                <span className="product-name-2">ja</span> account.</h6>

                                {error && <Alert variant="danger" className="alert text-center bg-white border-0">{error}</Alert>}

                               { currentUser && ( <Navigate to="/dashboard" replace={true} />
                               )}

                            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                                <Form.Control type="email" className='input' placeholder="Email" ref={emailRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" className='input' placeholder="Password" ref={passwordRef} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className='checkbox' label="Remember me" />
                            </Form.Group>
                            <Link to="/" className="text-decoration-none text-center">Forget Password?</Link>

                            <Button disabled={loading} className="btn mt-2" variant="primary" type="submit">
                                Log In
                            </Button>

                            <p className='link_forget'>Don't have an account? <Link to="/signup" className="text-decoration-none"> Sign Up</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;