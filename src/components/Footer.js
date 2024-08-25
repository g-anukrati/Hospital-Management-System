import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <Container className="p-4 pb-0">
        <section className="mb-4">
          <Button
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Button>

          <Button
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Button>

          <Button
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>

          <Button
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>
      </Container>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {"              "}
                City Hospital
              </h6>
              <p className="text-justify">
                1. Welcome to City Hospital, a leading healthcare institution
                dedicated to providing exceptional medical care, compassion, and
                innovation.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Physician
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Covid Consultant
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dentist
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Gynecologist
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>
                City Hospital, Delhi, India
              </p>
              {/* <p>For Any Feedback/Complain</p> */}
              <p>
                <i className="fas fa-envelope me-3"></i>
                hospital@city.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 9837002025
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 7088852745
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}
