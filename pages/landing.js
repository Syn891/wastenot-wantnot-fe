import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Banner from '../components/Banner';
import FoodExpirtyButton from '../components/FoodExpiryButton';
import NavButton from '../components/FancyNavButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';


const Landing = () => {
    
    return (
        <div>
            <Row>
            <Banner title="WasteNot-WantNot"/>
            </Row>
            <Row></Row>
            <Row></Row>
            <Row>
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
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            <NavbarBtn/>         
        <NavButton/>  
        </div>
    );
};

export default Landing;