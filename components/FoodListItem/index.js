import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from './FoodListItem.module.css'

function FoodListItem({ name, est_exp, category, quantity, measurement, color }) {
  if (!color) {
     color = "#5CC971"
  }
  return (
    < >
      <Col  className={css.col} xs={{span:3}}>
        <div>{name}</div>
      </Col>
      <Col  className={css.col} xs={{span:3}}>
        <div>{"01/01/0101"}</div>
        {/* {est_exp.$date.$numberLong} */}
      </Col>
      <Col  className={css.col} xs={{span:2}}>
        <div>{quantity}</div>
      </Col>
      <Col className={css.col}  xs={{span:2}}>
        <div>{measurement}</div>
      </Col>
      <Col className={css.col} xs={{span:2}}>
        <input type="checkbox"></input>
      </Col>
    </>
  );
}

export default FoodListItem;
