import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from './FoodListItem.module.css'

function FoodListItem({ name, est_exp, category, quantity, measurement, color }) {
  console.log(name, est_exp, category, quantity, measurement);
  // const date = Math.trunc(Number(est_exp.$date.$numberLong) / 10000000);
  
    if (!color) {
     color = "#5CC971"
  }
  //this is while we work out the date solution for the DB just to make the number shorter
  return (
    <>
      <Col  className={css.col} xs={{span:3}}>
        <div>{name}</div>
      </Col>
      <Col  className={css.col} xs={{span:3}}>
        <div>1/1/11</div>
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
//Console Log out items with the check box ticked when add checked items to pantry is pressed

export default FoodListItem;
