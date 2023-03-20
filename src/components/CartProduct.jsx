import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'
import { getProductData } from '../data/products'
import { formatCurrency } from "../utilities/formatCurrency"

export default function CartProduct(props) {

    const cart = useContext(CartContext)
    const idt = props.id;
    const quantity = props.quantity;
    const productData = getProductData(idt)

  return (
    <>
        <h3>{productData.name}</h3>
        <p>Total Quantity - {quantity}</p>
        <p>{ formatCurrency(quantity * productData.price.toFixed(2)) }</p>
        <Button size='sm' onClick={() => cart.deleteFromCart(idt)} >Remove</Button>
        <hr />
    </>
  )
}
