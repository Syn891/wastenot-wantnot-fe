import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import { Col, Container, Row } from "react-bootstrap";
import css from "../styles/Shoppinglist.module.css";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import CreateNewListButton from "../components/CreateNewListButton";
import { useState } from "react";

// $ database contains _id, id(string), shopping_items(array)[{_itemid(again), name, est_exp, category, quantity, measurement,_id(same as root_id)}],user_id

function ShoppingList() {
  const [addPantryDisable, setAddPantryDisable] = useState(false); //TRYING TO GET THE ADD TO PANTRY BUTTON TO GREY OUT WHEN THE ADD TO LIST FORM APPEARS, Passed down onclick as a prop to the ShoppingListTable however cant get the prop to be handled by the onClick of the AddItemButton on line 146, need to run both the function of setItemButtonClick(true) and pass the onclick up to this file and resolve on line 20.

  return (
    <Container className={css.container}>
      <Row className={css.row}>
        <Navbar title={"Grocery List"} />
        <Container className={css.innercontainer}>
          <ShoppingListTable
            onFormRender={() => setAddPantryDisable(true)}
            onNoFormRender={() => setAddPantryDisable(false)}
          />
          <Col>
            <Row className={css.row}>
              <AddItemToPantryButton
                message={"Add checked list items to My Pantry:"}
                addPantryDisable={addPantryDisable}
              />
            </Row>
            <Row className={css.row}>
              <CreateNewListButton message={"Create a new List"} />
            </Row>
            <DonationPromptInfo />
          </Col>
        </Container>
      </Row>
    </Container>
  ); //CONVERSATION TO HAVE: save button to push user shopping list to database to remove the need to push everytime a user adds an item? Look into local storage solution for shopping list?
}

export default ShoppingList;
