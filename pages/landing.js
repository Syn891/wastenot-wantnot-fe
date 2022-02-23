import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Banner from '../components/Banner';
import FoodExpirtyButton from '../components/FoodExpiryButton';
import NavButton from '../components/FancyNavButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import css from '../styles/Landing.module.css'


const Landing = () => {
    
    return (
        <div>
            <Row className={css.row}>
            <Banner title="WasteNot-WantNot"/>
            </Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}>
            <Col>
            <FoodExpirtyButton link="/" message = "Eggs. You have 1 day left"/>
            </Col>
            <Col>
            <FoodExpirtyButton link="/" message = "Eggs. You have 1 day left"/>
            </Col>
            <Col>
            <FoodExpirtyButton link="/" message = "Eggs. You have 1 day left"/>
            </Col>
            </Row>
            <Row className={css.row}>
            <Col>
            <NavButton link="/" message = "Find recipes to use these items here.........."/>
            </Col>
            </Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <NavbarBtn/>
        </div>
    );
};

export default Landing;