import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import axios from "axios";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    //alert("working")
    const configuration = {
      method: "post",
      url: "https://full-stack-auth.onrender.com/register",
      //url: "http://localhost:4000/register",
      data: {
        email,
        password
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
        setEmail("")
        setPassword("")
        window.location.href = "/login";
      })
      .catch((error) => {
        error = new Error();
      });  
  }
  return (
    <Container 
      style={{ height: "100dvh"}} 
      className="d-flex align-items-center justify-content-center flex-column">
      <h2>Register</h2>
      <Form 
       className='w-75 p-4 mt-2'
       style={{ border: "1px solid lightGrey", borderRadius: "8px" }}
       onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* submit button */}
        <Button 
          variant="primary" 
          type="submit"
          onSubmit={(e) => handleSubmit(e)}
          className="mt-3 w-100"
        >
          Register
        </Button>
      </Form>
      {/* display success message */}
      {register ? (
          <p className="text-success text-center text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-success text-center text-danger">You Are Not Registered</p>
        )}
    </Container>
  );
}
