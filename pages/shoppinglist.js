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
  const [addPantryDisable, setAddPantryDisable] = useState(false); //Pantry button greyed out when new item form is rendered
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState("error");

  //create a new array CheckedGroceryListItems, for each index in shoppingList create an object with {index: index, value: false} to correlate with unchecked boxes,
  //Items added to GroceryList array via AddGroceryListItem Button, and rendered on screen with checkbox,
  // If checkbox if checked we spread and slice the index and true into the CheckedGroceryListItems array (inState or in database).
  // When AddItemToPantry button is pressed, Post CheckedGorceryListItems to Pantry Array
  // Or we can swipe rendered item in GroceryList array , to add item to Pantry Array or delete item from GroceryList array.

  return (
    <Container className={css.container}>
      <Row className={css.row}>
        <Navbar title={"Grocery List"} />
        <Container className={css.innercontainer}>
          <ShoppingListTable
            onFormRender={() => setAddPantryDisable(true)}
            onNoFormRender={() => setAddPantryDisable(false)}
            setChecked={() => setChecked()}
            setIndex={() => setIndex()}
            // checkboxArray={checkboxArray}
            // setCheckboxArray={setCheckboxArray}
          />
          <Col>
            <Row className={css.row}>
              <AddItemToPantryButton
                message={"Add checked list items to My Pantry:"}
                addPantryDisable={addPantryDisable}
                onClick={() => console.log(index, checked)}
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
