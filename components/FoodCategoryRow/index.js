import { Row, Col } from "react-bootstrap";
import css from './FoodCategoryRow.module.css'

function FoodCategoryRow() {
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
      <Col className={css.cls} xs={{ span: 2 }}>
        <div>Unit</div>
      </Col>
      <Col className={css.cls} xs={{ span: 1 }}>
        <div>x</div>
      </Col>
    </Row>
  );
}

export default FoodCategoryRow;
