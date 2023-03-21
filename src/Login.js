import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import axios from "axios";
import Cookies from "universal-cookie";

export default function Login({ setLoginCheck, loginCheck}) {
  
  //To do this, you need to create a new component that will help to check if a certain condition has been met before allowing a user to access that route.
  //The condition you will be using in this case is the token generated during login. So before you create this ProtectedRoute component, let's go get the token from the Login component and make it available in all parts of the application.
  //Install universal-cookie. This is a cookie package that helps us share a value or variable across the application:
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e){
    e.preventDefault();
    //alert("working")
    const configuration = {
      method: "post",
      url: "https://full-stack-auth.onrender.com/login",
      //url: "http://localhost:4000/login",
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => { 
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        localStorage.setItem(("PODIA"), JSON.stringify(result.data))
        setLoginCheck(true);
        // window.location.href = "/auth";
      })
      .catch((error) => {
        error = new Error();
      });
  }

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("PODIA");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setLoginCheck(true);
  //     setProfile(foundUser);
  //   }
  // }, [loginCheck, setLoginCheck, setProfile]);

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column mt-2">
      <h2 className='text-center'>Login</h2>
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
          disabled={loginCheck}
          className="mt-3 w-100"
        >
          Login
        </Button>
      </Form>
      {/* display success message */}
      {loginCheck ? (
          <p className="text-success text-center text-success">You Are Logged In Successfully</p>
        ) : (
          <p className="text-danger text-center text-danger">You Are Not Logged In</p>
        )}
    </Container>
  );
}
