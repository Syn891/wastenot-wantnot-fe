import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from "./PantryListItem.module.css";
function PantryListItem({
  name,
  quantity,
  measurement,
  index,
  color,
  onChange,
  expiry
}) {

  // const date = Math.trunc(Number(est_exp.$date.$numberLong) / 10000000); //silly maths no functionality
  if (!color) {
    color = "#5CC971";
  }
  function handleChange(position) {
    const updatedCheckedState = isChecked.map((item, index) =>{
    console.log(item)

      index === position ? !item : item
    });

    // console.log("True False Array", updatedCheckedState);
    // setTrueFalseArraySL(updatedCheckedState);
  }
  return (
    <>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{name}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{expiry}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{quantity}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{measurement}</div>
      </Col>
      <Col className={css.col} xs={{ span: 1 }}>
        <input
          type="checkbox"
          // defaultChecked={trueFalseArraySL[index]}
          onChange={onChange}
          key={index}
        ></input>
      </Col>
    </>
  );
}
//Console Log out items with the check box ticked when add checked items to pantry is pressed
export default PantryListItem;
