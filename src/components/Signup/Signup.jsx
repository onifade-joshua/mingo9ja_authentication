import React, { useRef, useState } from 'react';
import "./signup.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../contexts/AuthStateListener";
import { Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);
  

 async function handleSubmit(e) {
    e.preventDefault()
  
    if(passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError(`Password don't match !`)
    }

    try{
      setError("")
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
     
    } catch{
      setError(`An account has being created already !`)
    }
    setLoading(false)
  }
  
  return (
    <>  
      <Container className='signup'>
        <Row>
          <Col>
          
            <Form onSubmit={handleSubmit}>
              <h3>Create account</h3>
              <h6 className="welcome">Welcome to <span className="product-name">Mingo</span>
              <span className="product-name-1">9</span>
              <span className="product-name-2">ja</span>
              </h6>
          
              {error && <Alert variant="danger" className="alert text-center bg-white border-0">{error}</Alert>}

              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" className='input' placeholder="Email Address" ref={emailRef}
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" className='input' placeholder="Password" 
                ref={passwordRef}
                  required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Control type="password" className='input' placeholder="Confirm Password"
                ref={confirmPasswordRef}
                  required />
              </Form.Group>

              <Button disabled={loading} variant="primary" type="submit" className="btn">
                Sign Up
              </Button>
              <p className="text-center mt-2">Have an account already? <Link to="/login" className="text-decoration-none">Log In</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;