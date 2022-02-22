import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = () => {
    return (
    <Container>
  <Row>
    <Col>WasteNot-<br/>WantNot</Col>
    <Col><img src="https://i.ibb.co/MV46RZx/Recycle-icon-by-rudezstudio-2-580x386-copy.png"></img>
    </Col>
  </Row>
</Container>
    );
};

export default Banner;