import React, { useState } from "react";
import FoodListItem from "../FoodListItem";
import FoodCategoryRow from "../FoodCategoryRow";
import shopListTestData from "../../testdata/testshoppinglists";

function ShoppingListTable() {
  return (
    <div>
      <FoodCategoryRow />
      {shopListTestData.map(function (item, index) {
        return <FoodListItem {...item.shopping_items[0]} key={index} />;
      })}
    </div>
  );
}

export default ShoppingListTable;
