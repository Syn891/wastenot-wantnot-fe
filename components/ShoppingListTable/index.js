import React, { useState, useEffect } from "react";
import FoodListItem from "../FoodListItem";
import FoodCategoryRow from "../FoodCategoryRow";
import SwipeBar from "../SwipeBar";
import { Col, Container, Row, Button } from "react-bootstrap";
import AddItemButton from "../AddItemButton";
import css from "./ShoppingListTable.module.css";
import { useFetch } from "../../hooks/useFetch.js";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import SwipeFoodListItem from "../SwipeFoodListItem";
import AddItemModal from "../AddItemModal";

function ShoppingListTable({
  onFormRender, //grey out pantry button
  onNoFormRender, //grey out pantry button
  shopListData, //database data
  setShopListData, //pass this down so we can spread new items into it when a user adds to shopping list
  trueFalseArraySL, // determine if checkbox is checked
  setTrueFalseArraySL, // set a false value for checkbox is checked when a new item is added to shopping list
  userSub,
  getUserShoppingList,
}) {
  // const [itemButtonClick, setItemButtonClick] = useState(false);
  // const [item, setItem] = useState("Error");
  // const [expiry, setExpiry] = useState("Error");
  // const [qty, setQty] = useState("Error");
  // const [unit, setUnit] = useState("Error");
  const [modalShow, setModalShow] = useState(false);
  // user = useUser();

  console.log(modalShow);

  useEffect(() => console.log("USERSUB PROP", userSub), []);
  //interactions with the database: swipe to add, swipe to delete, form submit,
  //for mvp create new list just deletes everything

  async function save(object) {
    // getUserShoppingList(); //janky
    console.log(object);
    setShopListData([...shopListData, object]);
    async function newShoppingItem() {
      const fetchData = useFetch(
        "shoppinglists",
        "PUT",
        // { shopping_items: dataStructure.shopping_items[0] },
        { shopping_items: object },
        //"/update/?user_id=google-oauth2|112451605105134992726" //this works
        `/update/?user_id=${userSub}`
      );
      const fetchedData = await Promise.resolve(fetchData);
      console.log(fetchedData);
      setModalShow(false);
    }
    newShoppingItem();

    // What we want to do is push the new added item onto the end of the users shopping list database

    setTrueFalseArraySL([...trueFalseArraySL, false]);
    //Would be here POST REQUEST shopListData to database function is called
    console.log("shop list data:", shopListData, "");
    // setItemButtonClick(false);
    // await getUserShoppingList();
  }
  // onFormRender();

  function renderShopListTable() {
    if (shopListData) {
      return shopListData.map(function (item, index) {
        return (
          <Container className={css.container}>
            <Row className={css.swipe}>
              <SwipeFoodListItem
                {...item}
                listItem={item}
                _id={item._id}
                userSub={userSub}
                getUserShoppingList={getUserShoppingList}
              >
                <FoodListItem
                  {...item}
                  key={item._id}
                  index={index}
                  listItem={item}
                  setShopListData={setShopListData}
                  trueFalseArraySL={trueFalseArraySL}
                  setTrueFalseArraySL={setTrueFalseArraySL}
                />
              </SwipeFoodListItem>
            </Row>
            {/* <SwipeBar key={index} /> */}
          </Container>
        );
      });
    }
  }

  return (
    <div>
      {renderShopListTable()}
      <Container className={css.input}>
        <Button onClick={() => setModalShow(true)} className={css.addItem}>
          Add Item to Grocery List
        </Button>
      </Container>
      <AddItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        save={save}
      />
    </div>
  );
}

// Fetch existing grocery list from database
// Add item to grocery list (array entry) through form.
// Is this array then stored in state or pushed to the database?
// Check if new entry on grocery list array is a match for an entry in Pantry array (database)
// If a match, show “duplicate alert”. Choose to discard entry or add to array anyway.
// When item is added to array, render a check box for each item
//When checkbox is checked strike through item on list
// If check box is ticked && add to pantry button is pressed, add checked item(s) to pantry array
// Item is mapped to Pantry array in database.
// Rendered grocery list items and database cleared? Is this actioned through pressing “new list” button?

export default ShoppingListTable;
