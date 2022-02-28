import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./AddItemButton.module.css";

function AddItemButton({ message, onClick }) {
  return (
    <Container>
      <Row>
        <button className={css.AddItemButton} onClick={onClick}>
          {message}
        </button>
      </Row>
    </Container>
  );
}

export default AddItemButton;
