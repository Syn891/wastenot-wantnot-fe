import React, { useState, useEffect } from "react";
import FoodListItem from "../FoodListItem";
import { Col, Container, Row, Button } from "react-bootstrap";
import css from "./ShoppingListTable.module.css";
import SwipeFoodListItem from "../SwipeFoodListItem";
function ShoppingListTable({
  shopListData, //database data
  setShopListData, //pass this down so we can spread new items into it when a user adds to shopping list
  trueFalseArraySL, // determine if checkbox is checked
  setTrueFalseArraySL, // set a false value for checkbox is checked when a new item is added to shopping list
  userSub,
  getUserShoppingList,
}) {
  function renderShopListTable() {
    if (shopListData) {
      return shopListData.map(function (item, index) {
        return (
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
        );
      });
    }
  }
  return <>{renderShopListTable()}</>;
}

export default ShoppingListTable;
