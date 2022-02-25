import { Row, Col } from "react-bootstrap";
import css from "./FoodCategoryRow.module.css";
function FoodCategoryRow() {
  return (
    <Row>
      <Col className={css.cls} xs={{ span: 2 }}>
        <p>Name</p>
      </Col>
      <Col className={css.cls} xs={{ span: 2 }}>
        <p>Exp</p>
      </Col>
      <Col className={css.cls} xs={{ span: 2 }}>
        <p>Quantity</p>
      </Col>
      <Col className={css.cls} xs={{ span: 2 }}>
        <p>Unit</p>
      </Col>
      <Col className={css.cls} xs={{ span: 4 }}>
        <p>x</p>
      </Col>
    </Row>
  );
}

export default FoodCategoryRow;
