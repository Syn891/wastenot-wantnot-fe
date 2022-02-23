import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import css from '../styles/Test.module.css'

const Test = () => {
    return (
        <Container className={css.ct}>
            <Row className={css.r}>
                <Col className={css.cls} xs={{span: 8}}>
                </Col>
                <Col className={css.cls} xs={{span: 4}}></Col>
            </Row>
            <Row className={css.r}>
                <Container className={css.ict}>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row className={css.green}></Row>
                    <Row className={css.yellow}></Row>
                    <Row className={css.red}>
                        <Col xs={{span: 3}} sm={{span: 12}} md={{span: 9}} xl={{span: 1}}>an image</Col>
                        <Col xs={{span: 9}} sm={{span: 12}} md={{span: 3}} xl={{span: 1}}>Some text 
                        <p> some more text</p></Col>
                    </Row>
        
                </Container>
            </Row>
        </Container>
    );
};

export default Test;