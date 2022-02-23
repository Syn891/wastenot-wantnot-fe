import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Banner from '../components/Banner';
import FoodExpiryButton from '../components/FoodExpiryButton';
import NavButton from '../components/FancyNavButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import css from '../styles/Landing.module.css'


const Landing = () => {

    const setColor = (number) => {
        let color = ''
        if (number < 3){
             color = '#F96D6D'
        }else if (number < 7 && number > 2){
            color = '#EF8D4B'
        }else{
            color = '#5CC971'
        }
        return color
    }
    
    return (
        <div>
            <Row className={css.row}>
            <Banner title="WasteNot-WantNot"/>
            </Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}>
            <Col>
            <FoodExpiryButton color = {setColor(2)} link="/" message = "Eggs. You have 2 day left"/>
            </Col>
            <Col>
            <FoodExpiryButton color = {setColor(5)} link="/" message = "Eggs. You have 5 day left"/>
            </Col>
            <Col>
            <FoodExpiryButton color = {setColor(9)} link="/" message = "Eggs. You have 9 day left"/>
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