import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function FoodListItem({ name, expDate, quantity, unit }) {
  return (
    <Row>
      <Col>
        <p>{name}</p>
      </Col>
      <Col>
        <p>{expDate}</p>
      </Col>
      <Col>
        <p>{quantity}</p>
      </Col>
      <Col>
        <p>{unit}</p>
      </Col>
      <Col>
        <input type="checkbox"></input>
      </Col>
    </Row>
  );
}

export default FoodListItem;
