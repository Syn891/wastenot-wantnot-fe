import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

function FoodListItem({
  name,
  est_exp,
  category,
  quantity,
  measurement,
  index,
  listItem,
}) {//if we can toggle and pass up a boolean value from here we can do it

  //on check or uncheck call function to change state from true to false and pass the function down as a prop!!!!
  console.log(listItem, name, est_exp, category, quantity, measurement, index);
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
      <Col>
        <p>{measurement}</p>
      </Col>
      <Col>
        <input type="checkbox" defaultChecked index={index}></input>
      </Col>
    </Row>
  );
}
//Console Log out items with the check box ticked when add checked items to pantry is pressed

export default FoodListItem;
