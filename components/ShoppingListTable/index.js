import React, { useState, useEffect } from "react";
import FoodListItem from "../FoodListItem";
import FoodCategoryRow from "../FoodCategoryRow";
import shopListTestData from "../../testdata/testshoppinglists";
import SwipeBar from "../SwipeBar";
import { Col, Container, Row } from "react-bootstrap";
import AddItemButton from "../AddItemButton";

function ShoppingListTable() {
  const [itemButtonClick, setItemButtonClick] = useState(false);
  const [itemToAdd, setItemToAdd] = useState();
  const [shopListData, setShopListData] = useState(shopListTestData); // what we want
  // shopListData = [...shopListData, dataStructure];
  const [item, setItem] = useState("Error");
  const [expiry, setExpiry] = useState("");
  const [qty, setQty] = useState(99999);
  const [unit, setUnit] = useState("");
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
    dataStructure = {
      _id: { $oid: "placeholder" },
      id: "placeholder",
      shopping_items: [
        {
          _itemid: "placeholder",
          name: item,
          est_exp: { $date: { $numberLong: "doesnt matter right now" } }, //https://stackoverflow.com/questions/22964199/how-to-convert-numberlong-to-date-in-mongodbs-shell
          category: "not needed for MVP",
          quantity: qty,
          measurement: unit,
          _id: { $oid: "placeholder" },
        },
      ],
      user_id: "placeholder",
    };
    setShopListData([...shopListData, dataStructure]);
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
        <Container>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="item"
              onChange={(e) => setItem(e.target.value)}
            ></input>
            <input
              placeholder="Expiry"
              onChange={(e) => setExpiry(e.target.value)}
            ></input>
            <input
              placeholder="Qty"
              onChange={(e) => setQty(e.target.value)}
            ></input>
            <input
              placeholder="Unit"
              onChange={(e) => setUnit(e.target.value)}
            ></input>
            <input
              type="submit"
              value="Submit"
              onClick={() => console.log("submit")}
            />
          </form>
        </Container>
      </Container>
    );
  }
  if (!itemButtonClick) {
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
        <AddItemButton
          message={"Add Item to Grocery List"}
          onClick={() => setItemButtonClick(true)}
        />
      </Container>
    );
  }
}

export default ShoppingListTable;
