import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <Container 
    style={{ height: "100dvh", color: "green"}} 
    className="d-flex align-items-center justify-content-center text-center flex-column"
    >
        <h2 className='fs-1'>Payment Successful!</h2>
        <p className='fs-4'>Thank You For Shopping From <span className='text-danger'>NewGen</span></p>
        <Link to="/free" className="btn btn-primary w-25 fs-5 mt-4">Back to Store</Link>
    </Container>
  )
}
