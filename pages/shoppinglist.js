import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import { Col, Container, Row } from "react-bootstrap";
import css from "../styles/Shoppinglist.module.css";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import CreateNewListButton from "../components/CreateNewListButton";
import { useState, useEffect } from "react";
import shopListTestData from "../testdata/testshoppinglists";

function handlePantryClick(trueFalseArraySL, shopListData) {
  console.log(trueFalseArraySL, "ShopList TF Array");
  //tried for and mapping, tried spreading, think the use state is being continually called and resetting it
  let pantryList = [];
  shopListData.map(function (item, index) {
    if (trueFalseArraySL[index]) {
      console.log(shopListData[index], "shop list data at index: ", index);
      pantryList.push(item);
    }
    console.log("Pantry List is ", pantryList);
    return pantryList;
  });
}

// $ database contains _id, id(string), shopping_items(array)[{_itemid(again), name, est_exp, category, quantity, measurement,_id(same as root_id)}],user_id
function ShoppingList() {
  const [addPantryDisable, setAddPantryDisable] = useState(false); //Pantry button greyed out when new item form is rendered
  const [shopListData, setShopListData] = useState(shopListTestData);
  const [pantryList, setPantryList] = useState(); //bastard, this keeps getting called
  const [trueFalseArraySL, setTrueFalseArraySL] = useState(
    new Array(shopListData.length).fill(false)
  ); //populate in ShopListTable
  return (
    <Container>
      <Row className={css.row}>
        <Navbar title={"Grocery List"} />
        <Container className={css.innercontainer}>
          <ShoppingListTable
            onFormRender={() => setAddPantryDisable(true)}
            onNoFormRender={() => setAddPantryDisable(false)}
            shopListData={shopListData}
            setShopListData={setShopListData}
            trueFalseArraySL={trueFalseArraySL}
            setTrueFalseArraySL={setTrueFalseArraySL}
          />
          <Col>
            <Row className={css.row}>
              <AddItemToPantryButton
                message={"Add checked list items to My Pantry:"}
                addPantryDisable={addPantryDisable}
                onClick={() =>
                  handlePantryClick(trueFalseArraySL, shopListData)
                }
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
