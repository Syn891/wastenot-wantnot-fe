import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useRouter } from "next/router";
import css from "../styles/Pantry.module.css";
import { Button, Container } from "react-bootstrap";
import FoodCategoryRow from "../components/FoodCategoryRow";
import PantryListItem from "../components/PantryListItem";
import SwipePantryBar from "../components/SwipePantryBar";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import { useFetch } from "../hooks/useFetch.js";
import AddItemModal from "../components/AddItemModal";
import DonationPromptInfo from "../components/DonationPromptInfo";
import FactCarousel from "../components/FactCarousel";
import { Row } from "react-bootstrap";
import { RiFridgeLine } from "react-icons/ri";
import ItemInfo from "../components/Iteminfo";

const Pantry = () => {
  let user = useUser();
  let router = useRouter();
  const [pantry, setPantry] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [oneChecked, setOneChecked] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [newEntryCount, setNewEntryCount] = useState(0);

  async function userPantry() {
    if (user.isLoading !== true) {
      const fetchData = useFetch(
        "pantryList",
        "GET",
        null,
        `/?user_id=${user.user.sub}`
      );
      const data = await Promise.resolve(fetchData);
      setIsChecked(new Array(data.payload.length).fill(false));
      return data.payload;
    }
  }

  const setColor = (number) => {
    let color = "";
    if (number < 3) {
      color = "#F96D6D";
    } else if (number < 7 && number > 2) {
      color = "#EF8D4B";
    } else {
      color = "#5CC971";
    }
    return color;
  };

  async function isCheckedFunc(id, position) {
    let tempState = [...isChecked];
    tempState[position] = !tempState[position];
    setIsChecked(tempState);

    const remove = { pantry_items: { _id: id } };
    const res = useFetch(
      "pantryList",
      "DELETE",
      remove,
      `/?user_id=${user.user.sub}`
    );
    await Promise.resolve(res);

    let userInfo = useFetch("users", "GET", null, `/${user.user.sub}`);
    userInfo = await Promise.resolve(userInfo);
    console.log(userInfo);
    let data = userInfo.payload.consumption + 1;

    let query = { consumption: data };
    let res1 = useFetch("users", "PUT", query, `/${user.user.sub}`);
    res1 = await Promise.resolve(res1);
  }

  useEffect(() => {}, [isChecked]);

  async function save(object) {
    let query = { pantry_items: object };
    const fetchData = useFetch(
      "pantryList",
      "PUT",
      query,
      `/update/?user_id=${user.user.sub}`
    );
    let res = await Promise.resolve(fetchData);
    setModalShow(false);
    setNewEntryCount(newEntryCount + 1);
  }

  useEffect(async () => {
    setPantry(await userPantry());
  }, [user.isLoading, newEntryCount]);

  function calcDate(expiryDate) {
    let dates = [new Date(), new Date(expiryDate)];

    function daysDifference(d0) {
      var diff = new Date(+d0[1]).setHours(12) - new Date(+d0[0]).setHours(12);
      return Math.round(diff / 8.64e7);
    }

    let dateFound = daysDifference(dates);
    return dateFound;
  }

  function renderListItems() {
    if (pantry && user) {
      {
        return pantry.map((f) => {
          return f.pantry_items.map((pi, index) => {
            let date = new Date(pi.est_exp);
            let dateString = date.toLocaleDateString("en-GB");
            let dateDif = calcDate(pi.est_exp);
            console.log("pi", pi);
            const object = {
              user_id: user.user.sub,
              donated_items: [
                {
                  name: pi.name,
                  est_exp: pi.est_exp,
                  category: pi.category,
                  quanitiy: pi.quantity,
                  measurement: pi.measurement,
                },
              ],
            };
            return (
              <SwipePantryBar
                key={pi._id}
                userId={user.user.sub}
                data={pi._id}
                object_id={f._id}
                object={object}
              >
                <PantryListItem
                  onChange={() => isCheckedFunc(pi._id, index)}
                  color={setColor(dateDif)}
                  name={pi?.name ? pi.name : ""}
                  quantity={pi?.quantity ? pi.quantity : ""}
                  measurement={pi?.measurement ? pi.measurement : ""}
                  expiry={dateString}
                />
              </SwipePantryBar>
            );
          });
        });
      }
    }
  }

  useEffect(async () => {
    setPantry(await userPantry());
  }, [user.isLoading]);

  return (
    <div className={css.body}>
      <Navbar Icon={RiFridgeLine} color="#EF8D4B" title={"My Pantry"}>
        <IoIosArrowBack
          size={"1.5em"}
          style={{ marginRight: "0.25em" }}
          onClick={() => router.back()}
        />
      </Navbar>
      <FoodCategoryRow value={"Eat"}/>

      <Container className={css.container}>{renderListItems()}</Container>

      <ItemInfo right={'waste'} left={'add to donation list'}/>

      <Container className={css.input}>
        <Button onClick={() => setModalShow(true)} className={css.addItem}>
          Add Item to Pantry
        </Button>
      </Container>
      <AddItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        save={save}
      />
      <Row className={css.cRow}>
        <FactCarousel />
      </Row>

      <DonationPromptInfo
        text="Find local donation points"
        className={css.dpiSVG}
        width={ "100%"}
      />
    </div>
  );
};

export default Pantry;
