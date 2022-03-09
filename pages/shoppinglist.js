import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import { Col, Container, Row, Button } from "react-bootstrap";
import css from "../styles/Shoppinglist.module.css";
import SaveListButton from "../components/SaveListButton";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import CreateNewListButton from "../components/CreateNewListButton";
import React, { useState, useEffect, useRef } from "react";
import shopListTestData from "../testdata/testshoppinglists";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import { useFetch } from "../hooks/useFetch";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import FoodCategoryRow from "../components/FoodCategoryRow";
//delete items on swipe
//look into solution for comparing shopping list and pantry list
//add remove shopping list item functionality (swipe?)
// styling of buttons, etc

function ShoppingList() {
  const { user, error, isLoading } = useUser();
  const [addPantryDisable, setAddPantryDisable] = useState(false); //Pantry button greyed out when new item form is rendered
  const [shopListData, setShopListData] = useState(undefined); //undefined for line 66
  const [trueFalseArraySL, setTrueFalseArraySL] = useState(); //This is running after the usestate


  async function preLoadShoppingList() {
     let data = useFetch('mealplan', 'GET', null, `/?user_id=${user.sub}`)
     data = await Promise.resolve(data)
     let edamamRecipes = data.payload[0].meal_plan.map(async (meal)=> {
       console.log(meal.recipe_id)
       let res = useFetch('api/search', 'GET', null, `/?recipe_id=${meal.recipe_id}`)
       res = await Promise.resolve(res)
       return res
     })
     let edamam = await Promise.all(edamamRecipes)
     edamam.map((ed)=> {
       ed.recipe.ingredients.map((ingredient) => {
         let ing = {
             name: ingredient.food,
             est_exp: new Date(),
             category: ingredient.foodCategory,
             quantity: ingredient.quantity,
             measurement: ingredient.measure
         }
         let query = { shopping_items: ing };
         
         
         useFetch('shoppinglists', 'PUT', query, `/update/?user_id=${user.sub}` )
       })
     })
     
  }

  async function getUserShoppingList() {
    const fetchData = useFetch(
      "shoppinglists",
      "GET",
      null,
      // "/?user_id=google-oauth2|112451605105134992726"
      `/?user_id=${user.sub}`
    );
    const response = await Promise.resolve(fetchData);
    if (response.payload.length > 0) {
      const userShopData = response.payload[0].shopping_items;
      // if userShopData.length less than 2 put placeholder items in
      setTrueFalseArraySL(new Array(userShopData.length).fill(false));
      setShopListData(userShopData);
    }
  }

  useEffect(() => {
    if (isLoading !== true) {
      getUserShoppingList();
      preLoadShoppingList()
    }
  }, [isLoading]);

  async function handlePantryClick(trueFalseArraySL, shopListData, user) {
    console.log(trueFalseArraySL, "ShopList TF Array");
    let pantryList = [];
    let remainingPantryList = [];
    shopListData.map(function (item, index) {
      if (trueFalseArraySL[index]) {
        pantryList.push(item);
      } else {
        remainingPantryList.push(item);
      }
    });

    console.log(
      "Checked List to go to Pantry is ",
      pantryList,
      "to be put into Users List For",
      "Name:",
      user.name,
      "Sub/userID:",
      user.sub,
      "Remaining items to go back into users shopping list",
      remainingPantryList,
      "time is",
      new Date()
    );

    useFetch(
      "pantryList",
      "PUT",
      { pantry_items: pantryList },
      `/update/?user_id=${user.sub}`
      // "/update/?user_id=google-oauth2|112451605105134992726" //this works
    );

    useFetch(
      "shoppinglists",
      "DELETE",
      { user_id: user.sub },
      // { user_id: "google-oauth2|11245" }, //REQ.BODY
      `/all/?user_id=${user.sub}`
      // "/?user_id=google-oauth2|11245" //REQ.QUERY
    );

    useFetch(
      // replace user shopping list here, delete in one above
      "shoppinglists",
      "POST",
      { shopping_items: remainingPantryList }, //REQ.BODY
      //{ shopping_items: [{ name: "delete" }, { name: "delete2" }] },
      `/?user_id=${user.sub}`
      // "/?user_id=google-oauth2|11245" //REQ.QUERY
      //`/update/?user_id=${userSub}`
    );
    console.log("remaining pantry list", remainingPantryList);
    // getUserShoppingList();
    setShopListData(remainingPantryList);
    return pantryList;
  }

  async function createNewSL() {
    //Should be somewthing like this
    await useFetch(
      "shoppinglists",
      "DELETE",
      { user_id: user.sub },
      `/all/?user_id=${user.sub}`
    );

    await useFetch(
      "shoppinglists",
      "POST",
      { shopping_items: [] },
      `/?user_id=${user.sub}`
    );
    // setShopListData([]);
    await getUserShoppingList();
  }

  function loadShopListTable() {
    if (shopListData) {
      console.log(shopListData);
      return (
        <ShoppingListTable
          getUserShoppingList={getUserShoppingList}
          onFormRender={() => setAddPantryDisable(true)}
          onNoFormRender={() => setAddPantryDisable(false)}
          shopListData={shopListData}
          setShopListData={setShopListData}
          trueFalseArraySL={trueFalseArraySL}
          setTrueFalseArraySL={setTrueFalseArraySL}
          userSub={user.sub}
        />
      );
    }
  }

  const router = useRouter();
  // return shopListData ? (
  return shopListData ? (
    // the ? is so lines 105-107 run whgile we are waiting for our getUserShoppingList promises to resolve
    <Container>
      <Row className={css.row}>
        <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"Grocery List"}>
          <IoIosArrowBack
            size={"1.5em"}
            style={{ marginRight: "0.25em" }}
            onClick={() => router.back()}
          />
        </Navbar>
        </Row>
        <Row className={css.food}>
        <FoodCategoryRow />
        </Row>
        <Container>
          <Row className={css.innercontainer}>
          {loadShopListTable()}
          </Row>
            <Row className={css.pantryButton}>
              <AddItemToPantryButton
                message={"Add checked list items to My Pantry:"}
                // addPantryDisable={addPantryDisable}
                onClick={() =>
                  handlePantryClick(trueFalseArraySL, shopListData, user)
                }
              />
            </Row>
            <Row className={css.row}>
              <Button className={css.addItem} onClick={() => createNewSL()}>
                Create new List
              </Button>
            </Row>
            <Row className={css.donate}>
            <DonationPromptInfo
              text="Find local donation points"
              className={css.dpiSVG}
            />
            </Row>
        </Container>
      
    </Container>
  ) : (
    <>YOU ARE PROBABLY NOT LOGGED IN</>
  ); //CONVERSATION TO HAVE: save button to push user shopping list to database to remove the need to push everytime a user adds an item? Look into local storage solution for shopping list?
}

export default ShoppingList;
