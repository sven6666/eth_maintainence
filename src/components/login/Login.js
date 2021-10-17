import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {loginUser, loginUserPromise} from "./../../services/user";
import {Row, Image, Container, Col, Alert} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [load, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    setLoader(true);
    loginUserPromise(email, password).then(data => {
      console.log(data);
      setLoader(false);
      if (data && 'username' in data) {
        history.push({
          pathname: "/list_broken_item",
          state: {
            data
          }});
      } else {
        setError("User Not Found");
        setShow(true);
      }
    });
  }

  return (
      <div className="Login">
      <header className="App-header">
      <Image src="/images/logorouteth.jpeg" thumbnail style={{width: '200px', height: '200px'}} className="mt-4" />
        <h1>
          Routeth
        </h1>
      </header>
      {load ? <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box> : 
      <Container>
        <Form onSubmit={handleSubmit} className="mt-3" style={{maxWidth: '480px'}}>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="2">Email</Form.Label>
            <Col sm="10">
            <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password" className="mt-2">
            <Form.Label column sm="2">Password</Form.Label>
            <Col sm="10">
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Col>

          </Form.Group>
          <Button type="submit" onSubmit={handleSubmit} className="mt-3">
            Login
          </Button>
        </Form>
        {show &&  <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error}
        </p>
      </Alert>}
      </Container>
      }
      </div>
  );
}
