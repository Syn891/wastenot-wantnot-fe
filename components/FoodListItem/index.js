import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function FoodListItem({ name, est_exp, category, quantity, measurement }) {
  console.log(name, est_exp, category, quantity, measurement);
  const date = Math.trunc(Number(est_exp.$date.$numberLong) / 10000000);
  //this is while we work out the date solution for the DB just to make the number shorter
  return (
    <Row>
      <Col>
        <p>{name}</p>
      </Col>
      <Col>
        <p>{date}</p>
      </Col>
      <Col>
        <p>{quantity}</p>
      </Col>
      <Col>
        <p>{measurement}</p>
      </Col>
    </Row>
  );
}
//Console Log out items with the check box ticked when add checked items to pantry is pressed

export default FoodListItem;
