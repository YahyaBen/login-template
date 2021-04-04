import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router";
import { login } from "../../tools/axios";
import "./style/style.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loged, setLoged] = useState(false);

  const seConnecter = (e) => {
    e.preventDefault();
    // login(mail,password)
    console.log({ mail, password });
    localStorage.setItem(mail, password);
    setLoged(true);
  };
  useEffect(() => {
    if (localStorage.getItem > 0) {
      setLoged(true);
    }
  }, [loged]);
  
  if (loged) {
    return <Redirect to="/Home" />;
  }
  
  return (
    <>
      <div className="login-txt-img"></div>
      <div className="loginForm">
        <Form className="form" onSubmit={seConnecter}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Se connecter
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
