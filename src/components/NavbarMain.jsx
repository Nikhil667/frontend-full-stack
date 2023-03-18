import React, { useState } from 'react'
import { Container, Nav, Navbar, Button, Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { useUserInfo } from '../context/UserContext';
import avatar from '../assets/avatar.png'

export default function NavbarMain({ loginCheck, profile }) {
  
  const { openSidebar, googleLogOut } = useUserInfo()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

return (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className='align-items-center'>
        <Navbar.Brand href="/">NewG</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/free" as={NavLink}>
              Free Component
            </Nav.Link>
            <Nav.Link to="/auth" as={NavLink}>
              Auth Component
            </Nav.Link>
          </Nav>
          <hr className='text-light' />
          <Button className="me-4" onClick={handleShow}>
            Cart 0 Items
          </Button>
          <hr className='text-light' />
          <Nav>
            <img
              src={
                loginCheck && profile.length !== 0 ? profile.picture : avatar
              }
              onClick={openSidebar}
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
                cursor: "pointer",
              }}
              className="rounded-circle"
              alt="/"
            ></img>
            {!loginCheck ? "" : <Button onClick={googleLogOut}>Log Out</Button>}
          </Nav>
        </Navbar.Collapse>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              Shopping Cart
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>This is modal</Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  </>
);}
      