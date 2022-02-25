import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from "./CreateNewListButton.module.css";

function CreateNewListButton ({message}) {
    return (
        <Container className={css.CreateNewListButton}>
        <Row>
    <button>{message}</button>
    </Row>
    </Container>
    );
};

export default CreateNewListButton;
