import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import { Col, Container, Row } from "react-bootstrap";
import css from "../styles/Shoppinglist.module.css";
import SaveListButton from "../components/SaveListButton";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import CreateNewListButton from "../components/CreateNewListButton";
import React, { useState, useEffect, useRef } from "react";
import shopListTestData from "../testdata/testshoppinglists";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import { useFetch } from "../hooks/useFetch";

function handlePantryClick(trueFalseArraySL, shopListData, user) {
  console.log(trueFalseArraySL, "ShopList TF Array");
  let pantryList = [];
  shopListData.map(function (item, index) {
    if (trueFalseArraySL[index]) {
      pantryList.push(item);
    }
  });
  console.log(
    "Checked List to go to Pantry is ",
    pantryList,
    "to be put into Users List For",
    "Name:",
    user.user.name,
    "Sub/userID:",
    user.user.sub
  );

  return pantryList;
}

function ShoppingList() {
  const user = useUser();
  const [addPantryDisable, setAddPantryDisable] = useState(false); //Pantry button greyed out when new item form is rendered
  const [shopListData, setShopListData] = useState(undefined); //undefined for line 66
  const [trueFalseArraySL, setTrueFalseArraySL] = useState(); //This is running after the usestate

  async function getUserShoppingList() {
    console.log("getUserShopList ran");
    const fetchData = useFetch(
      "shoppinglists",
      "GET",
      null,
      "/?user_id=google-oauth2|112451605105134992726"
      // `/?user_id=${user.user.sub}`
    );
    const response = await Promise.resolve(fetchData);
    const userShopData = response.payload[0].shopping_items;
    setTrueFalseArraySL(new Array(userShopData.length).fill(false));
    setShopListData(userShopData);
    console.log(
      "user Shop Data from database",
      userShopData,
      "True False Array in get users",
      trueFalseArraySL
    );
  }

  useEffect(() => {
    getUserShoppingList();
  }, []);

  return shopListData ? ( // the ? is so lines 105-107 run whgile we are waiting for our getUserShoppingList promises to resolve
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
              <SaveListButton
                message={"Save List (temp button incase of weird DB issues"}
                addPantryDisable={addPantryDisable}
                onClick={
                  () => console.log("save button clicked")
                  // handleSaveListClick(trueFalseArraySL, shopListData, user)
                }
              />
              <AddItemToPantryButton
                message={"Add checked list items to My Pantry:"}
                addPantryDisable={addPantryDisable}
                onClick={() =>
                  handlePantryClick(trueFalseArraySL, shopListData, user)
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
  ) : (
    <>Loading hehe :D</>
  ); //CONVERSATION TO HAVE: save button to push user shopping list to database to remove the need to push everytime a user adds an item? Look into local storage solution for shopping list?
}

export default ShoppingList;
