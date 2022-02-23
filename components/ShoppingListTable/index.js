// import {con}
import React, { useState } from "react";
import FoodListItem from "../FoodListItem";

function ShoppingListTable() {
  return (
    <div>
      <h1>hello im the shop list table</h1>
      <FoodListItem
        name={"test"}
        expDate={"test"}
        quantity={50}
        unit={"tonnes"}
      />
      <FoodListItem
        name={"apple"}
        expDate={Date()}
        quantity={5000}
        unit={"tonnes"}
      />
      <FoodListItem
        name={"orange"}
        expDate={Date().toString()}
        quantity={5000}
        unit={"kg"}
      />
      <FoodListItem
        name={"bricks"}
        expDate={"15/15/2155"}
        quantity={5}
        unit={"pc"}
      />
    </div>
  );
}

export default ShoppingListTable;
