import React from 'react'
import { Card, Button, Badge } from "react-bootstrap"

export default function CardItems({ id, name, price, imgUrl, rating, reviews, in_stock }) {

    const quantity = 0

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-4 text-muted">{price}</span>
        </Card.Title>
        { in_stock ? <Badge bg="primary" className='w-50 mb-4 fs-6'>In Stock</Badge> : <Badge bg="danger" className='w-50 mb-4 fs-6'>Out Of Stock</Badge> }
        <Card.Text className='fs-5'> <span>Rating: </span> {rating}</Card.Text>
        <Card.Text className='fs-5'> <span>Reviews: </span> {reviews}+</Card.Text>
        
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" disabled={!in_stock}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button >+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
