import React from 'react';
import Banner from '../components/Banner';
import DonationPromptInfo from '../components/DonationPromptInfo';
import {Button, Col, Row} from 'react-bootstrap'
import css from '../styles/Landing.module.css'
import NavigationButton from '../components/NavigationButton';
import FoodExpiryButton from '../components/FoodExpiryButton';
import {FaHandHoldingHeart } from "react-icons/fa";
import {TiShoppingCart} from 'react-icons/ti'
import {RiFridgeLine} from 'react-icons/ri'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {MdLabelImportant} from 'react-icons/md'
import { useUser, getSession } from '@auth0/nextjs-auth0';
import Dashboard from '../components/Dashboard';
import DashboardChart from '../components/DashboardChart';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import {useFetch} from '../hooks/useFetch.js'
import FindRecipes from '../components/Findrecipes';
const Landing = ({properties}) => {

  const { user, error, isLoading } = useUser();
  const [pantry, setPantry] = useState([]);
  console.log(user);
  async function loadUser(){
  if (user) {
    let dbUser = await fetch(
      `https://waste-want.herokuapp.com/users/${user.sub}`
    );
    dbUser = await dbUser.json();
      console.log(dbUser)
    if (dbUser.payload === null) {
      const newUser = {
        _id: user.sub,
        name: user.nickname,
        email: user.name,
        dietary_reqs: [],
        wastage: 0,
        consumption: 0,
        donations: 0,
      };

      const response = await useFetch("users", "POST", newUser, "");

      console.log(response.json);
      // parses JSON response into native JavaScript objects
    } else {
      console.log("user already in db");
    }
  }}
useEffect(()=>{loadUser()}, [isLoading])
  

  const [waste, setWaste] = useState(0);
  const [donations, setDonations] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [total, setTotal] = useState(waste + donations + consumption)

  async function createUserPantryTable() {
    let dbPantry = useFetch("pantryList", "GET", null, `/?user_id=${user.sub}`);

    dbPantry = await Promise.resolve(dbPantry);
    if (dbPantry.payload.length < 1) {
      let newPantry = {
        user_id: user.sub,
        pantry_items: [],
      };
      let newdbPantry = useFetch(
        "pantryList",
        "POST",
        newPantry,
        `/?user_id=${user.sub}`
      );
      newdbPantry = await Promise.resolve(newdbPantry);
    }
  }

  async function createUserDonationsTable() {
    let dbDonations = useFetch(
      "donations",
      "GET",
      null,
      `/?user_id=${user.sub}`
    );

    dbDonations = await Promise.resolve(dbDonations);
    console.log(dbDonations);
    if (dbDonations.payload.length < 1) {
      console.log(user.sub);
      let newDonation = {
        user_id: user.sub,
        donated_items: [],
      };
      let newdbDonation = useFetch("donations", "POST", newDonation, "");
      newdbDonation = await Promise.resolve(newdbDonation);
    }
  }

  async function createUserDonationBanksTable() {
    let dbBanks = useFetch(
      "donationbank",
      "GET",
      null,
      `/?user_id=${user.sub}`
    );

    dbBanks = await Promise.resolve(dbBanks);

    if (dbBanks.payload.length < 1) {
      console.log(user.sub);
      let newBank = {
        user_id: user.sub,
        donation_banks: [],
      };
      let newdbBank = useFetch("donationbank", "POST", newBank, "");
      newdbBank = await Promise.resolve(newdbBank);
      console.log(newdbBank);
    }
  }

  async function createUserShoppingListTable() {
    let dbShopping = useFetch(
      "shoppinglists",
      "GET",
      null,
      `/?user_id=${user.sub}`
    );

    dbShopping = await Promise.resolve(dbShopping);

    console.log("databaseShopping", dbShopping);

    if (dbShopping.payload.length < 1) {
      console.log("yay want to see this");
      //Acting really strangely, need to actually populate Shopping List right now to get page to work(were close to getting that sorted), when running on 3001 everything is statusing 304 or 200. useFetch POST inside shoppinglist.js works fine sending an array of new objects to the users db after it has been deleted in the use fetch above. Can we just call the shopping list post request inside of a different one? like after the user donations?

      // let newShoppingItem = {
      //   user_id: user.sub,
      //   shopping_items: [],
      // };
      let newShopping = useFetch(
        "shoppinglists",
        "POST",
        // { shopping_items: newShoppingItem },
        { shopping_items: [] },
        `/?user_id=${user.sub}`
      );
      newShopping = await Promise.resolve(newShopping);
      console.log("ns", newShopping);
    }
  }

  async function createUserMealPlanTable() {
    let dbMealPlan = useFetch("mealplan", "GET", null, `/?user_id=${user.sub}`);

    dbMealPlan = await Promise.resolve(dbMealPlan);
    if (dbMealPlan.payload.length < 1) {
      let newMealPlanItem = {
        user_id: user.sub,
        meal_plan: [],
      };
      let newMealPlan = useFetch(
        "mealplan",
        "POST",
        newMealPlanItem,
        `/?user_id=${user.sub}`
      );
      newMealPlan = await Promise.resolve(newMealPlan);
    }
  }

  useEffect(() => {
    if (isLoading !== true) {
      createUserPantryTable();
      createUserDonationsTable();
      createUserMealPlanTable();
      createUserDonationBanksTable();
      createUserShoppingListTable();
    }
  }, [isLoading]);

  async function userDashboard() {
    if (isLoading !== true) {
      console.log(user.sub)
      const fetchData = useFetch("users", "GET", null, `/${user.sub}`);

      const data = await Promise.resolve(fetchData);
      console.log(data);
      setConsumption(data.payload.consumption)
   setWaste(data.payload.wastage)
   setDonations(data.payload.donations)
   setTotal(waste + consumption + donations)
      return [data.payload];
    }
  }


  useEffect(async()=>{
   console.log(isLoading)
  if(isLoading !== true) {
    let data = await userDashboard()
  
    console.log(data[0])
  //  setConsumption(data[0].consumption)
  //  setWaste(data[0].wastage)
  //  setDonations(data[0].donations)
  //  setTotal(waste + consumption + donations)

   console.log(waste + donations + consumption)

  }
  console.log(consumption)
  console.log(waste)
  console.log(donations)

   },[user, isLoading, donations]);

  useEffect(() => {
    userPantry();
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  async function getData() {
    if (isLoading !== true) {
      const fetchData = useFetch(
        "pantryList",
        "GET",
        null,
        `/?user_id=${user.sub}`
      );
      const data = await Promise.resolve(fetchData);
      return data.payload;
    }
  }

  async function userPantry() {
    let data = await getData();

    if (data) {
      let values = data.map((d) => {
        return d.pantry_items.map((pi) => {
          let date = dateDif(pi.est_exp);
          return [date, pi.name];
        });
      });
      setPantry(values);
    }
  }

  function dateDif(expiryDate) {
    let dates = [new Date(), new Date(expiryDate)];

    function daysDifference(d0) {
      var diff = new Date(+d0[1]).setHours(12) - new Date(+d0[0]).setHours(12);
      return Math.round(diff / 8.64e7);
    }

    let dateFound = daysDifference(dates);
    return dateFound;
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

  function renderButtons() {
    let sortedValues = pantry.sort(function (a, b) {
      console.log(a[0]);
      return a[1] - b[1];
    });
    console.log(pantry, sortedValues);
    return sortedValues.map((p, index) => {
      // console.log(pantry)
      if (pantry.length < 1) {
        return (
          <div className={css.err}>
            You have no items due to expire in your pantry
          </div>
        );
      } else {
        return p.map((a, index) => {
          if (index < 3 && a[0] >= 0) {
            return (
              <Col key={a[1] + a[0]} className={css.febtns}>
                <FoodExpiryButton
                  color={setColor(a[0])}
                  link="/"
                  message={`${a[1]}. You have ${a[0]} day(s) left`}
                />
              </Col>
            );
          }
        });
      }
    });
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

    return (
      user && (
        <Col className={css.view}>
            <Row className={css.row}>
              <Banner title="WasteNot-WantNot"/>  
            </Row>
            <Row className={css.row}>
              <Navbar title="Food Waste Matters!" Icon={MdLabelImportant} iconColor={"white"}/>
            </Row>
            <Row className={css.row}>
              <div className={css.pantryTitle}>
                <div>Food in your Pantry due to go out of date:</div>
              </div>
            </Row>
            <Row className={css.row}>

              { renderButtons() }
            </Row>
                                           
            <Row className={css.row}>
            <FindRecipes text='Find recipes to use these items here'/>
            </Row>
            <Row className={css.row}>
                <DonationPromptInfo 
                    text="Or donate items to orgnisations in need, here:"
                    className={css.dpiSVG}/>
            </Row>
            <Row className={css.row}>
                <Col className={css.col}>
                    <NavigationButton title="Grocery List" color="#94DEB2" link="/shoppinglist"Icon={TiShoppingCart}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton title="In my Pantry" color="#5CC971" link="/pantry"Icon={RiFridgeLine}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton title="My Meals" color="#F1AC79" link="/mealPlan"Icon={GiForkKnifeSpoon}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton title="Donations" color="#EF8D4B" link="/donations"Icon={FaHandHoldingHeart}/>
                </Col>
            </Row>
            <Row className={css.row}><Dashboard waste={waste} donations={donations} consumption={consumption} total={total} link="/userInformation" />

</Row>
        </Col>
    ));
    
};
export default Landing;
