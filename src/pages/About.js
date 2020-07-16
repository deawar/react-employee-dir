import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Employee Directory</h1>
        <h2>A Searchable Listing of Employee Information</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Employee Directory!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              This is a React App to centralize employe information.
            </p>
            <p>
              It is Searchable by name.
            </p>
            <p>
              Additional Information may be placed here.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
