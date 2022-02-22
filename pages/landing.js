import React from 'react';
import DonationPromptInfo from '../components/DonationPromptInfo';
import {Col, Row} from 'react-bootstrap'
import css from '../styles/Landing.module.css'
import NavigationButton from '../components/NavigationButton';
import {FaHandHoldingHeart } from "react-icons/fa";
import {TiShoppingCart} from 'react-icons/ti'
import {RiFridgeLine} from 'react-icons/ri'
import {GiForkKnifeSpoon, GiKnifeFork} from 'react-icons/gi'


const Landing = () => {
    return (
        <Col className={css.view}>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}>
                <DonationPromptInfo 
                    text="...Or donate items to orgnisations in need, here:"
                    className={css.dpiSVG}/>
            </Row>
            <Row className={css.row}>
                <Col className={css.col}>
                    <NavigationButton color="#94DEB2" link="/"Icon={TiShoppingCart}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#5CC971" link="/"Icon={RiFridgeLine}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#F1AC79" link="/"Icon={GiForkKnifeSpoon}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#EF8D4B" link="/donations"Icon={FaHandHoldingHeart}/>
                </Col>
            </Row>
            <Row className={css.row}></Row>
        </Col>
    );
};

export default Landing;