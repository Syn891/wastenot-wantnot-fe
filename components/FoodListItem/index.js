import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function FoodListItem({ name, est_exp, category, quantity, measurement }) {
  console.log(name, est_exp, category, quantity, measurement);
  return (
    <Row>
      <Col>
        <p>{name}</p>
      </Col>
      <Col>
        <p>{"date placeholder"}</p>
        {/* {est_exp.$date.$numberLong} */}
      </Col>
      <Col>
        <p>{quantity}</p>
      </Col>
      <Col>
        <p>{measurement}</p>
      </Col>
      <Col>
        <input type="checkbox"></input>
      </Col>
    </Row>
  );
}

export default FoodListItem;
