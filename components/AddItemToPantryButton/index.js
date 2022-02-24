import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from "./AddItemToPantryButton.module.css";

function AddItemToPantryButton ({message}) {
    return (
        <Container className={css.AddItemToPantryButton}>
        <Row>
    <button>{message}</button>
    </Row>
    </Container>
    );
};

export default AddItemToPantryButton;

