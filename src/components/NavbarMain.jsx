import React, { useContext, useState } from 'react'
import { Container, Nav, Navbar, Button, Modal} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { useUserInfo } from '../context/UserContext';
import avatar from '../assets/avatar.png'
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';
import { formatCurrency } from "../utilities/formatCurrency"

export default function NavbarMain({ loginCheck, profile }) {
  const cart = useContext(CartContext)
  
  const { openSidebar, googleLogOut } = useUserInfo()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const checkOut = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
}


  //let's say if don't want to add another function in context as it has only handful of use cases, we can do the following 

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

return (
  <>
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" >
      <Container className='align-items-center'>
        <Navbar.Brand href="/">NewGen</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/free" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/auth" as={NavLink}>
              Previous Purchases
            </Nav.Link>
          </Nav>
          

          {/* <Button className="me-4" onClick={handleShow}>
            Cart {productsCount} Items
          </Button> */}
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
        {productsCount > 0 && (
          <Button
            onClick={handleShow}
            style={{ width: "3rem", height: "3rem", position: "relative", marginRight: "1em" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {productsCount}
            </div>
          </Button>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              Shopping Cart
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {productsCount > 0 ?
                <>
                  {cart.items.map((item, index) => (
                    <CartProduct key={index} id={item.id} quantity={item.quantity}/>
                  ))}
                  <h3>Total: {formatCurrency(cart.getTotalCost().toFixed(2))}</h3>
                  <Button variant='success' onClick={checkOut} >Purchase Items!</Button>
                </>
              :
                <>
                  <h2>There are no items in your cart</h2>
                </>
              }
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  </>
);}
      