import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Banner.module.css'

const Banner = ({title}) => {
    return (
      <div className={css.heading}>
        <Col className={css.header}><h1>{title}</h1></Col>
        <Col className={css.branding}><img className={css.image} src="https://i.ibb.co/QPB4VKC/Wn-Wn-Logo-White.png"></img>
        </Col>
    </div>
    );
};

export default Banner;