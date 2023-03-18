import { createContext, useContext, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import NavbarMain from "../components/NavbarMain";
import Cookies from "universal-cookie";

const UserContext = createContext();

export function useUserInfo(){
    return useContext(UserContext)
}

export function UserProvider({ children }){

    const cookies = new Cookies();
    
    const [isOpen, setIsOpen] = useState(false)

    const [user, setUser] = useState([]);

    const [profile, setProfile] = useState([]);

    const [loginCheck, setLoginCheck] = useState(false);

    const openSidebar = () => setIsOpen(true)

    const closeSidebar = () => setIsOpen(false)

    const googleLogIn =  useGoogleLogin({
        onSuccess: (response) => {
          setUser(response)
          setLoginCheck(true)
        },
        onError: (error) => console.log("Login Failed:", error)

    });

    const googleLogOut = () => {
      googleLogout();
      setProfile([]);
      setLoginCheck(false)
      cookies.remove("TOKEN", { path: "/" })
      localStorage.clear();
      window.location.href = "/";
    };

    useEffect(() => {
      if (loginCheck) {
        console.log(user, "in useEffect");
        const configuration = {
          method: "get",
          url: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        };
        axios(configuration)
          .then((result) => {
            setProfile(result.data);
            setLoginCheck(true)
            localStorage.setItem(("PODIA"), JSON.stringify(result.data))
          })
          .catch((error) => {
            error = new Error();
          });
      }
    }, [loginCheck, user]);

    useEffect(() => {
      const loggedInUser = localStorage.getItem("PODIA");
      if (loggedInUser) {
        const foundUser = JSON.parse(loggedInUser);
        setProfile(foundUser);
        setLoginCheck(true)
      }
    }, []);

    return (
        <UserContext.Provider
            value={{
                openSidebar,
                closeSidebar,
                googleLogIn,
                googleLogOut,
                setProfile
            }}
        >   
            <NavbarMain profile={profile} loginCheck={loginCheck}/>
            {children}
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} loginCheck={loginCheck} setLoginCheck={setLoginCheck} />
        </UserContext.Provider>
    )

}