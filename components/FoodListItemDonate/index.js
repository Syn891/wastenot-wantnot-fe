import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from "./FoodListItem.module.css";
function FoodListItemDonate({
  name,
  est_exp,
  category,
  quanitiy,
  measurement,
  index,
  listItem,
  color,
}) {
  // const date = Math.trunc(Number(est_exp.$date.$numberLong) / 10000000); //silly maths no functionality
  if (!color) {
    color = "#5CC971";
  }

  // function handleChange(position) {
  //   const updatedCheckedState = trueFalseArraySL.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setTrueFalseArraySL(updatedCheckedState);

  let date = new Date(est_exp);
  let newDate = date.toLocaleDateString("en-GB");

  const [checked, setChecked] = useState(false);
  const checkedArray = [];

  const handleChange = (item) => {
    setChecked(!checked);
    if (checked === true) {
      checkedArray.push(item);
    }
  };
  return (
    <>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{name}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{newDate}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{quanitiy}</div>
      </Col>
      <Col className={css.col} xs={{ span: 3 }}>
        <div>{measurement}</div>
      </Col>
      {/* <Col className={css.col} xs={{ span: 0 }}></Col> */}
    </>
  );
}

//Console Log out items with the check box ticked when add checked items to pantry is pressed
export default FoodListItemDonate;
