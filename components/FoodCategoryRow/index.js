import { Row, Col } from "react-bootstrap";
import css from './FoodCategoryRow.module.css'

function FoodCategoryRow() {
  return (
    <Row className={css.row}>
      <Col xs={{span:3}}>
        <p>Name</p>
      </Col>
      <Col xs={{span:3}}>
        <p>Expiry Date</p>
      </Col>
      <Col xs={{span:2}}>
        <p>Quantity</p>
      </Col>
      <Col xs={{span:2}}>
        <p>Unit</p>
      </Col>
      <Col xs={{span:2}}></Col>
    </Row>
  );
}

export default FoodCategoryRow;
