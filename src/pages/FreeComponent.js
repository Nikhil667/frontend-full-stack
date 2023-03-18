import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardItems from '../components/CardItems';
import { productsArray } from '../data/products'

export default function FreeComponent() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      //url: "https://full-stack-auth.onrender.com/free-endpoint"
      url: "http://localhost:4000/free-endpoint"
    }
    axios(configuration)
      .then((result) => {
        setMessage(result.data.message)
      })
      .catch((error) => {
        error = new Error();
      })
  }, [])

  return (
    <div>
    <h1 className="text-center">Free Component</h1>

    {/* displaying our message from our API call */}
    <h3 className="text-center text-danger">{message}</h3>

    <Container>
    <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {productsArray.map(item => (
          <Col key={item.id}>
            <CardItems {...item} />
          </Col>
        ))}
      </Row>
      </Container>
  </div>
  )
}
