import React from "react";
import css from "./navbar.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Navbar({ title }) {
  return (
    <Container>
      <Row className={css.navBar}>
        <Col xs={{ span: 3 }}>
          <p>burger</p>
        </Col>
        <Col xs={{ span: 6 }}>
          <h2>{title}</h2>
        </Col>
        <Col xs={{ span: 3 }}>
          <p>icon</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
