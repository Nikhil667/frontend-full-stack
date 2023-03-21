import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function AuthComponent() {
  const [message, setMessage] = useState("");
  const cookies = new Cookies();
  const token = cookies.get("TOKEN") 
  useEffect(() => {
    if(token){
      const configuration = {
        method: "get",
        url: "https://full-stack-auth.onrender.com/auth-endpoint",
        //url: "http://localhost:4000/auth-endpoint",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      axios(configuration)
      .then((result) => {
        setMessage(result.data.message)
      })
      .catch((error) => {
        error = new Error()
      })
    }
  }, [token])

  // const logout = () => {
  //   cookies.remove("TOKEN", { path: "/" })
  //   window.location.href = "/";
  //   localStorage.clear();
    
  // }

  return (
    <div className="text-center">
      <h1>Auth Component</h1>

      {/* displaying our message from our API call */}
      <h3 className="text-danger">{message}</h3>

      {/* logout */}
      {/* <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button> */}
    </div>
  );
}
