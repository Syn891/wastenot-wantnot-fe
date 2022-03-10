import Navbar from "../components/Navbar";
import DonationPromptInfo from "../components/DonationPromptInfo";
import ShoppingListTable from "../components/ShoppingListTable";
import { Col, Container, Row, Button } from "react-bootstrap";
import css from "../styles/Shoppinglist.module.css";
import AddItemToPantryButton from "../components/AddItemToPantryButton";
import React, { useState, useEffect, useRef } from "react";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import { useFetch } from "../hooks/useFetch";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import FoodCategoryRow from "../components/FoodCategoryRow";
import AddItemModal from "../components/AddItemModal";

function ShoppingList() {
  const { user, error, isLoading } = useUser();
  const [addPantryDisable, setAddPantryDisable] = useState(false); //Pantry button greyed out when new item form is rendered
  const [shopListData, setShopListData] = useState(undefined); //undefined for line 66
  const [trueFalseArraySL, setTrueFalseArraySL] = useState(); //This is running after the usestate
  const [modalShow, setModalShow] = useState(false);

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
      setTrueFalseArraySL(new Array(userShopData.length).fill(false));
      setShopListData(userShopData);
    }
  }

  useEffect(() => {
    if (isLoading !== true) {
      getUserShoppingList();
    }
  }, [isLoading]);

  async function handlePantryClick(trueFalseArraySL, shopListData, user) {
    let pantryList = [];
    let remainingPantryList = [];
    shopListData.map(function (item, index) {
      if (trueFalseArraySL[index]) {
        pantryList.push(item);
      } else {
        remainingPantryList.push(item);
      }
    });

    useFetch(
      "pantryList",
      "PUT",
      { pantry_items: pantryList },
      `/update/?user_id=${user.sub}`
    );

    useFetch(
      "shoppinglists",
      "DELETE",
      { user_id: user.sub },
      `/all/?user_id=${user.sub}`
    );

    useFetch(
      "shoppinglists",
      "POST",
      { shopping_items: remainingPantryList },
      `/?user_id=${user.sub}`
    );

    setShopListData(remainingPantryList);
    return pantryList;
  }

  async function createNewSL() {
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

    await getUserShoppingList();
  }

  function loadShopListTable() {
    if (shopListData) {
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

  async function save(object) {
    setShopListData([...shopListData, object]);
    async function newShoppingItem() {
      const fetchData = useFetch(
        "shoppinglists",
        "PUT",
        { shopping_items: object },
        `/update/?user_id=${user.sub}`
      );
      const fetchedData = await Promise.resolve(fetchData);
      setModalShow(false);
    }
    newShoppingItem();
    setTrueFalseArraySL([...trueFalseArraySL, false]);
  }

  const router = useRouter();
  return shopListData ? (
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
        <FoodCategoryRow value={"x"}/>
      </Row>
      <Container>
        <Row className={css.innercontainer}>{loadShopListTable()}</Row>
        <Container className={css.input}>
        <Row className={css.add}>
          <Button onClick={() => setModalShow(true)} className={css.addItem}>
            Add Item to Grocery List
          </Button>
          </Row>
        </Container>
        <AddItemModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          save={save}
        />
        <Row className={css.pantryButton}>
          <AddItemToPantryButton
            message={"Add checked list items to My Pantry:"}
            onClick={() =>
              handlePantryClick(trueFalseArraySL, shopListData, user)
            }
          />
        </Row>
        <Row className={css.row}>
          <Button className={css.addItem} onClick={() => createNewSL()}>
            Clear List
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
    <>Loading...</>
  );
}

export default ShoppingList;
