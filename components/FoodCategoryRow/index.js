import { Row, Col } from "react-bootstrap";
function FoodCategoryRow() {
  return (
    <Row>
      <Col>
        <p>Name</p>
      </Col>
      <Col>
        <p>Expiry Date</p>
      </Col>
      <Col>
        <p>Quantity</p>
      </Col>
      <Col>
        <p>Unit</p>
      </Col>
    </Row>
  );
}

export default FoodCategoryRow;
