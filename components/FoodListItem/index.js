import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from "./FoodListItem.module.css";
function FoodListItem({
  name,
  est_exp,
  quantity,
  measurement,
  index,
  color,
  trueFalseArraySL,
  setTrueFalseArraySL,
}) {
  let date = new Date(est_exp);
  let newDate = date.toLocaleDateString("en-GB");
  //let updatedName = name.replace(/[^0-9a-z]/gi, "");
  //let updatedMeasurement = measurement.replace(/[^0-9a-z]/gi, "");

  if (!color) {
    color = "#5CC971";
  }
  function handleChange(position) {
    const updatedCheckedState = trueFalseArraySL.map((item, index) =>
      index === position ? !item : item
    );
    setTrueFalseArraySL(updatedCheckedState);
  }

  return (
    <>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{updatedName}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{newDate}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{quantity}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{updatedMeasurement}</div>
      </Col>
      <Col className={css.col} xs={{ span: 1 }}>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => {
            handleChange(index);
          }}
          key={index}
        ></input>
      </Col>
    </>
  );
}

export default FoodListItem;
