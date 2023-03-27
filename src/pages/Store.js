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
      url: "https://full-stack-auth.onrender.com/free-endpoint"
      //url: "http://localhost:4000/free-endpoint"
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
    <h1 className="text-center">Store</h1> 
    {/* Free Component */}

    {/* displaying our message from our API call */}
    <h3 className="text-center text-danger">{message}</h3>

    <Container>
    {/* <h2 className='text-center mt-5'>Store</h2> */}
      <Row md={2} xs={1} lg={3} className="g-4 p-3">
        {productsArray.map((item, index) => (
          <Col key={index}>
            <CardItems {...item} />
          </Col>
        ))}
      </Row>
      </Container>
  </div>
  )
}
