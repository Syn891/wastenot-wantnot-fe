import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Banner.module.css'

const Banner = ({title}) => {
    return (
      <div>
    <Col className={css.header}><h1 className={css.h1}>{title}</h1></Col>
    <Col className={css.branding}><img src="https://i.ibb.co/MV46RZx/Recycle-icon-by-rudezstudio-2-580x386-copy.png"></img>
    </Col>
    </div>
    );
};

export default Banner;