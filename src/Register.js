import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
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
      //url: "https://full-stack-auth.onrender.com/register",
      url: "http://localhost:4000/register",
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
    
  }
  

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" 
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button 
          variant="primary" 
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
      </Form>
      {/* display success message */}
      {register ? (
          <h2 className="text-success">You Are Registered Successfully</h2>
        ) : (
          <h2 className="text-danger">You Are Not Registered</h2>
        )}
    </>
  );
}
