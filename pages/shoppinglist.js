import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import SwipeBar from "../components/SwipeBar";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import css from "../styles/Shoppinglist.module.css";
// $ database contains _id, id(string), shopping_items(array)[{_itemid(again), name, est_exp, category, quantity, measurement,_id(same as root_id)}],user_id

function ShoppingList() {
  return (
    <Container className={css.container}>
      <Row className={css.row}>
        <Navbar title={"Grocery List"} />
        <Container className={css.innercontainer}>
          <ShoppingListTable />
          <Col>
            <Row className={css.row}>
              <SwipeBar />
            </Row>
            <Row className={css.row}>
              <Button>Add List Item Button</Button>
            </Row>
            <Row className={css.row}>
              <Button>Add to pantry button</Button>
            </Row>
            <Row className={css.row}>
              <Button>Create New List</Button>
            </Row>
            <DonationPromptInfo />
          </Col>
        </Container>
      </Row>
    </Container>
  );
}

export default ShoppingList;
