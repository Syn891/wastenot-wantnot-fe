import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from "./AddItemButton.module.css";

function AddItemButton ({message}) {
    return (
        <Container className={css.AddItemButton}>
        <Row>
    <button>{message}</button>
    </Row>
    </Container>
    );
};

export default AddItemButton;

