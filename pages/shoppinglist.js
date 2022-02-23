import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";

// $ database contains _id, id(string), shopping_items(array)[{_itemid(again), name, est_exp, category, quantity, measurement,_id(same as root_id)}],user_id

// FoodItem(){
//     name
//     expdate
//     quantity
//     unit
//     radio?selector

// }

// ShoppingListTable(){
//     SpecificRow
//     NameRow
//     FoodItem
//     FoodItem
//     FoodItem
//     FoodItem...
// }

function ShoppingList() {
  return (
    <div>
      <Navbar title={"Grocery List"} />
      <ShoppingListTable />
      {/*
//   FoodAlert
//   AddItemBtn
//   NewListBtn */}
      <DonationPromptInfo />
    </div>
  );
}

export default ShoppingList;
