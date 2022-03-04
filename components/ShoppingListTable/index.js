import React, { useState, useEffect } from "react";
import FoodListItem from "../FoodListItem";
import FoodCategoryRow from "../FoodCategoryRow";
import SwipeBar from "../SwipeBar";
import { Col, Container, Row } from "react-bootstrap";
import AddItemButton from "../AddItemButton";
import css from "./ShoppingListTable.module.css";
import { useFetch } from "../../hooks/useFetch.js";
import { useUser, getSession } from "@auth0/nextjs-auth0";

function ShoppingListTable({
  onFormRender, //grey out pantry button
  onNoFormRender, //grey out pantry button
  shopListData, //database data
  setShopListData, //pass this down so we can spread new items into it when a user adds to shopping list
  trueFalseArraySL, // determine if checkbox is checked
  setTrueFalseArraySL, // set a false value for checkbox is checked when a new item is added to shopping list
  userSub,
}) {
  const [itemButtonClick, setItemButtonClick] = useState(false);
  const [item, setItem] = useState("Error");
  const [expiry, setExpiry] = useState("Error");
  const [qty, setQty] = useState("Error");
  const [unit, setUnit] = useState("Error");

  useEffect(() => console.log("USERSUB PROP", userSub), []);
  //interactions with the database: swipe to add, swipe to delete, form submit,
  //for mvp create new list just deletes everything
  async function handleSubmit(event) {
    event.preventDefault(); //stop page refresh

    let dataStructure = {
      user_id: "google-oauth2|112451605105134992726",
      shopping_items: [
        {
          _itemid: "dont even need this",
          name: item,
          est_exp: Date.now(),
          category: "not needed for MVP",
          quantity: qty,
          measurement: unit,
        },
      ],
    };

    useFetch(
      "shoppinglists",
      "PUT",
      { shopping_items: dataStructure.shopping_items[0] },
      //"/update/?user_id=google-oauth2|112451605105134992726" //this works
      `/update/?user_id=${userSub}`
    );

    // if (response.payload.length < 1) {
    //   useFetch(
    //     "shoppinglists",
    //     "POST",
    //     dataStructure,
    //     "/?user_id=google-oauth2|112451605105134992726"
    //   );
    // } else {
    //   // let query = { meal_plan: data.meal_plan[0] };
    // }

    // What we want to do is push the new added item onto the end of the users shopping list database

    setShopListData([...shopListData, dataStructure.shopping_items[0]]);
    setTrueFalseArraySL([...trueFalseArraySL, false]);
    //Would be here POST REQUEST shopListData to database function is called
    console.log("shop list data:", shopListData, "");
    setItemButtonClick(false);
  }
  onFormRender();
  if (itemButtonClick) {
    return (
      <Container>
        <FoodCategoryRow />
        {shopListData.map(function (item, index) {
          return (
            <>
              <Row>
                <FoodListItem
                  {...item}
                  key={item._id}
                  index={index}
                  listItem={item}
                  setShopListData={setShopListData}
                  trueFalseArraySL={trueFalseArraySL}
                  setTrueFalseArraySL={trueFalseArraySL}
                />
              </Row>
              <Row>
                <SwipeBar key={index} />
              </Row>
            </>
          );
        })}
        <Container xs={{ span: 12 }}>
          <Row>
            <form onSubmit={handleSubmit}>
              <Col className={css.cls} xs={{ span: 2 }}>
                <input
                  placeholder="item"
                  onChange={(e) => setItem(e.target.value)}
                ></input>
              </Col>
              <Col className={css.cls} xs={{ span: 2 }}>
                <label htmlFor="date">Exp:</label>
                <input
                  placeholder="Expiry"
                  type="date"
                  onChange={(e) => setExpiry(e.target.value)}
                ></input>
              </Col>
              <Col className={css.cls} xs={{ span: 2 }}>
                <input
                  placeholder="Qty"
                  onChange={(e) => setQty(e.target.value)}
                ></input>
              </Col>
              <Col className={css.cls} xs={{ span: 2 }}>
                <input
                  placeholder="Unit"
                  onChange={(e) => setUnit(e.target.value)}
                ></input>
              </Col>
              <Col className={css.cls} xs={{ span: 2 }}>
                <input
                  type="submit"
                  value="+"
                  onClick={() => {
                    console.log("submit");
                    onNoFormRender();
                  }}
                />
              </Col>
            </form>
          </Row>
        </Container>
      </Container>
    );
  }
  function noFormRender() {}
  onNoFormRender();
  //causing error, doesnt work nested in function, solution needed}
  if (!itemButtonClick) {
    return (
      <Container>
        <FoodCategoryRow />
        {console.log("line 141 in SLtable", shopListData)}
        {shopListData.map(function (item, index) {
          return (
            <Container>
              <Row>
                <FoodListItem
                  {...item}
                  key={item._id}
                  index={index}
                  listItem={item}
                  setShopListData={setShopListData}
                  trueFalseArraySL={trueFalseArraySL}
                  setTrueFalseArraySL={setTrueFalseArraySL}
                />
              </Row>
              <SwipeBar key={index} />
            </Container>
          );
        })}
        <AddItemButton
          message={"Add Item to Grocery List"}
          onClick={() => {
            setItemButtonClick(true);
            noFormRender();
          }}
        />
      </Container>
    );
  }
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
