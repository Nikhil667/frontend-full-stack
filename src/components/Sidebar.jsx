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
            <Button disabled={true} onClick={() => {
              googleLogIn()
              handleClose()
              }}>Sign in with Google 🚀 </Button>
            <p className="fs-4 m-0 text-center">OR</p>
            <Login loginCheck={loginCheck} setLoginCheck={setLoginCheck}/>
            <div>
            <p className="text-center">Don't have an account</p>
            <Button
              className=" w-100"
              onClick={() => {
                navigate("/register");
                handleClose();
              }}
              >
              Create Account
            </Button> 
            </div>
            {/* <Nav.Link to="/register" as={NavLink}>register</Nav.Link> */}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }