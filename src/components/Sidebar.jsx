import { Offcanvas, Stack, Button } from "react-bootstrap"
import { useUserInfo } from "../context/UserContext"
import Login from "../Login"
import { useNavigate } from "react-router-dom"


export default function Sidebar({ isOpen, setIsOpen, loginCheck, setLoginCheck }) {

    const { closeSidebar, googleLogIn } = useUserInfo()

    const navigate = useNavigate()

    const handleClose = () => setIsOpen(!isOpen)

    return (
      <Offcanvas show={isOpen} onHide={closeSidebar} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            <Button disabled={loginCheck} onClick={() => {
              googleLogIn()
              handleClose()
              }}>Sign in with Google 🚀 </Button>
            <h2>OR</h2>
            <Login loginCheck={loginCheck} setLoginCheck={setLoginCheck}/>
            <Button
              onClick={() => {
                navigate("/register");
                handleClose();
              }}
            >
              Register
            </Button> 
            {/* <Nav.Link to="/register" as={NavLink}>register</Nav.Link> */}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }