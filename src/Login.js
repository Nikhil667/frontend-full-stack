import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  //To do this, you need to create a new component that will help to check if a certain condition has been met before allowing a user to access that route.
  //The condition you will be using in this case is the token generated during login. So before you create this ProtectedRoute component, let's go get the token from the Login component and make it available in all parts of the application.
  //Install universal-cookie. This is a cookie package that helps us share a value or variable across the application:

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
    //alert("working")
    const configuration = {
      method: "post",
      url: "https://full-stack-auth.onrender.com/login",
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/auth";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formEmail">
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
        <Form.Group controlId="formPassword">
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
          Login
        </Button>
      </Form>
      {/* display success message */}
      {login ? (
          <h2 className="text-success">You Are Logged In Successfully</h2>
        ) : (
          <h2 className="text-danger">You Are Not Logged In</h2>
        )}
    </>
  );
}
