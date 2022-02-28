import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import css from "./FoodListItem.module.css";
function FoodListItem({
  name,
  est_exp,
  category,
  quantity,
  measurement,
  index,
  listItem,
  setChecked,
  checkboxArray,
}) {
  const [checkedinflm, setCheckedinflm] = useState(false);

  //if we can toggle and pass up a boolean value from here we can do it
  console.log("cbx array", checkboxArray);
  //on check or uncheck call function to change state from true to false and pass the function down as a prop!!!!
  console.log(listItem, name, est_exp, category, quantity, measurement, index);

  const date = Math.trunc(Number(est_exp.$date.$numberLong) / 10000000); //this is while we work out the date solution for the DB just to make the number shorter, numberLong is how many milliseconds since 1/1/1970

  // if (!color) {
  //   color = "#5CC971";
  // }
  function weirdBebug() {
    console.log(checkedinflm, index);
    setChecked();
  }
  return (
    <Row>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{name}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{date}</div>
        {/* {est_exp.$date.$numberLong} */}
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{quantity}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <div>{measurement}</div>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <p>{measurement}</p>
      </Col>
      <Col className={css.col} xs={{ span: 2 }}>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => {
            setCheckedinflm(true);
            weirdBebug();
          }}
          index={index}
        ></input>
      </Col>
    </Row>
  );
}
//Console Log out items with the check box ticked when add checked items to pantry is pressed

export default FoodListItem;
