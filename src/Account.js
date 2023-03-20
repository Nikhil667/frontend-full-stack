import React from "react";
import {Container, Stack } from "react-bootstrap";
import "./spreadsheets/Home.css"
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <>
      <div className="wrapper">
        <section className="customBackGround d-flex align-items-center pb-5">
          <Container>
            <Stack gap={4}>
              <div>
              <h1 className="hero-heading">
              Shop the Future Today
              </h1>
              </div>
              <p className="fs-4 w-75">
              Explore the latest and greatest tech gadgets on our one-stop e-commerce destination.
              </p>
              <div className="d-flex gap-3 w-75 align-items-center">
                <Link to="/free" className="btn btn-dark w-50 p-2 fs-4" >
                  Store
                </Link>
                <Link to="/register" className="btn btn-outline-dark w-50 fs-4" >
                  Register
                </Link>
              </div>
            </Stack>
          </Container>
        </section>
      </div>
    </>
  );
}