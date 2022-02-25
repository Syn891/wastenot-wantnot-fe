import React, { useState, useEffect } from "react";
import FoodListItem from "../FoodListItem";
import FoodCategoryRow from "../FoodCategoryRow";
import shopListTestData from "../../testdata/testshoppinglists";
import SwipeBar from "../SwipeBar";
import { Col, Container, Row } from "react-bootstrap";
import AddItemButton from "../AddItemButton";
import css from "./ShoppingListTable.module.css";

function ShoppingListTable() {
  const [itemButtonClick, setItemButtonClick] = useState(false);
  const [itemToAdd, setItemToAdd] = useState();
  const [shopListData, setShopListData] = useState(shopListTestData); // what we want
  // shopListData = [...shopListData, dataStructure];
  const [item, setItem] = useState("Error");
  const [expiry, setExpiry] = useState("Error");
  const [qty, setQty] = useState("Error");
  const [unit, setUnit] = useState("Error");
  useEffect(() => {});
  let dataStructure = {
    _id: { $oid: "placeholder" },
    id: "placeholder",
    shopping_items: [
      {
        _itemid: "placeholder",
        name: "item name",
        est_exp: { $date: { $numberLong: "doesnt matter right now" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
        category: "not needed for MVP",
        quantity: 999999,
        measurement: "X",
        _id: { $oid: "placeholder" },
      },
    ],
    user_id: "placeholder",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(expiry); //Console Logging Date from form
    dataStructure = {
      _id: { $oid: "placeholder" },
      id: "placeholder",
      shopping_items: [
        {
          _itemid: "placeholder",
          name: item,
          est_exp: { $date: { $numberLong: "1645444573974" } }, //Solution Needed
          category: "not needed for MVP",
          quantity: qty,
          measurement: unit,
          _id: { $oid: "placeholder" },
        },
      ],
      user_id: "placeholder",
    };
    setShopListData([...shopListData, dataStructure]);
    //Would be here POST REQUEST shopListData to database function is called
    alert(`form submitted`);
    console.log("shop list data:", shopListData, "");
    setItemButtonClick(false);
  };

  if (itemButtonClick) {
    return (
      <Container>
        <FoodCategoryRow />
        {shopListData.map(function (item, index) {
          return (
            <Container>
              <FoodListItem {...item.shopping_items[0]} key={item._id} />
              <SwipeBar key={index} />
            </Container>
          );
        })}
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
                onClick={() => console.log("submit")}
              />
            </Col>
          </form>
        </Row>
      </Container>
    );
  }
  // For each item in the ShopList Data array a chekcbox is rendered, create an array of true false values for if checkbox is checked, compare the true false against the index of the food items array
  if (!itemButtonClick) {
    return (
      <Container>
        <FoodCategoryRow />
        {shopListData.map(function (item, index) {
          return (
            <Container>
              <Row>
                <FoodListItem {...item.shopping_items[0]} key={item._id} />
                <input type="checkbox" key={index} checked></input>
              </Row>
              <SwipeBar key={index} />
            </Container>
          );
        })}
        <AddItemButton
          message={"Add Item to Grocery List"}
          onClick={() => setItemButtonClick(true)}
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
