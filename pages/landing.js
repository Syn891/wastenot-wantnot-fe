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
import { useUser, getSession } from '@auth0/nextjs-auth0';
import Dashboard from '../components/Dashboard';
import DashboardChart from '../components/DashboardChart';
import Navbar from '../components/Navbar';

const Landing = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  const setColor = (number) => {
        let color = ''
        if (number < 3){
             color = '#F96D6D'
        }else if (number < 7 && number > 2){
            color = '#EF8D4B'
        }else{
            color = '#5CC971'
        }
        return color
      }

    return (
      user && (
        <Col className={css.view}>
            <Row className={css.row}>
              <Banner title="WasteNot-WantNot"/>  
            </Row>
            <Row className={css.row}>
              <Navbar title="Food Waste Matters!" Icon={RiFridgeLine} />
            </Row>
            <Row className={css.row}>
              <div className={css.pantryTitle}>
                <div>Food in your Pantry which is going out of date:</div>
              </div>
            </Row>
            <Row className={css.row}>
              <Col className={css.febtns}>
                <FoodExpiryButton className={css.btn} color = {setColor(2)} link="/" message = "Eggs. You have 2 day left"/>
              </Col>
              <Col className={css.febtns}>
                <FoodExpiryButton color = {setColor(5)} link="/" message = "Eggs. You have 5 day left"/>
              </Col>
              <Col className={css.febtns}>
                <FoodExpiryButton color = {setColor(9)} link="/" message = "Eggs. You have 9 day left"/>
              </Col>
            </Row>
                                           
            <Row className={css.row}></Row>
            <Row className={css.row}>
                <DonationPromptInfo 
                    text="...Or donate items to orgnisations in need, here:"
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
                    <NavigationButton title="My Donations" color="#EF8D4B" link="/donations"Icon={FaHandHoldingHeart}/>
                </Col>
            </Row>
            <Row className={css.row}>
            </Row>

            <Row className={css.row}><Dashboard link="/userInformation" />
</Row>
        </Col>
    ));
    
};

  export async function getServerSideProps(ctx) {
   const session = getSession(ctx.req, ctx.res);
  
   if(session) {
    let dbUser = await fetch(`https://waste-want.herokuapp.com/users/${session.user.sub}`)
    dbUser = await dbUser.json()

    if (dbUser.payload === null) {

      const newUser = {
        _id: session.user.sub,
        name: session.user.nickname,
        email: session.user.name, 
        dietary_reqs: [],
        wastage: 0,
        consumption: 0,
        donations: 0
      }

      const response = await fetch(`https://waste-want.herokuapp.com/users/` , {
            method: 'POST', 
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', 
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
          });
          console.log(response.json); // parses JSON response into native JavaScript objects
        } else {
          console.log("user already in db")
        }
  
    return {
            props: { properties: dbUser},
          }
        } else {
          return {
            props: {properties: {}}
          }
        }
   }





export default Landing;