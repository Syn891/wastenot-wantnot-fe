import { Row, Col } from "react-bootstrap";
import css from "./FoodCategoryRow.module.css";

function DonFoodCategoryRow() {
  return (
    <Row className={css.row}>
      <Col className={css.cls} xs={{ span: 3 }}>
        <div>Name</div>
      </Col>
      <Col className={css.cls} xs={{ span: 3 }}>
        <div>Expiry Date</div>
      </Col>
      <Col className={css.cls} xs={{ span: 3 }}>
        <div>Quantity</div>
      </Col>
      <Col className={css.cls} xs={{ span: 3 }}>
        <div> Unit</div>
      </Col>
    </Row>
  );
}

export default DonFoodCategoryRow;
