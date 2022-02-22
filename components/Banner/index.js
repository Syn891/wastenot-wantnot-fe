import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({title}) => {
    return (
  <Row>
    <Col><h1>{title}</h1></Col>
    <Col><img src="https://i.ibb.co/MV46RZx/Recycle-icon-by-rudezstudio-2-580x386-copy.png"></img>
    </Col>
  </Row>
    );
};

export default Banner;