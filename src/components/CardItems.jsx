import React, { useContext } from 'react'
import { Card, Button, Badge } from "react-bootstrap"
import { CartContext } from '../context/CartContext'
import { formatCurrency } from "../utilities/formatCurrency"

export default function CardItems({id, name, price, imgUrl, rating, reviews, in_stock,
}) {

  const cart = useContext(CartContext)
  
  const quantity = cart.getProductQuantity(id);

  console.log(cart.items)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
      {in_stock ? (
          <Badge bg="dark" className="w-50 mb-4 fs-6">
            In Stock
          </Badge>
        ) : (
          <Badge bg="danger" className="w-50 mb-4 fs-6">
            Out Of Stock
          </Badge>
        )}
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-4">{name}</span>
          <span className="ms-4 text-muted fs-5">{ formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text className="fs-5 m-0">
          {" "}
          <span>Rating: </span> {rating}
        </Card.Text>
        <Card.Text className="fs-5">
          {" "}
          <span>Reviews: </span> {reviews}+
        </Card.Text>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button 
            className="w-100" 
            disabled={!in_stock}
            onClick={() => cart.addOneToCart(id)}
            >
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
                <Button onClick={() => cart.removeOneFromCart(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button onClick={() => cart.addOneToCart(id)}>+</Button>
              </div>
              <Button onClick={() => cart.deleteFromCart(id)} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
