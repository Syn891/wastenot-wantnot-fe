import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./AddItemToPantryButton.module.css";

function AddItemToPantryButton({ message, addPantryDisable }) {
  return (
    <Container className={css.AddItemToPantryButton}>
      <Row>
        <button disabled={addPantryDisable}>{message}</button>
      </Row>
    </Container>
  );
}

export default AddItemToPantryButton;
