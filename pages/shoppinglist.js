import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import SwipeBar from "../components/SwipeBar";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import css from "../styles/Shoppinglist.module.css";
import AddItemButton from "../components/AddItemButton";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import CreateNewListButton from "../components/CreateNewListButton";

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
              <AddItemButton message={"Add item to List"}/>
            </Row>
            <Row className={css.row}>
              <AddItemToPantryButton message={"Add checked list items to My Pantry:"}/>
            </Row>
            <Row className={css.row}>
              <CreateNewListButton message={"Create a new List"}/>
            </Row>
            <DonationPromptInfo />
          </Col>
        </Container>
      </Row>
    </Container>
  );
}

export default ShoppingList;
