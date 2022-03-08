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
  const [pantry, setPantry] = useState ([])

    const [waste, setWaste] =useState(10);
    const [donations, setDonations] = useState(10);
    const [consumption, setConsumption]= useState(0);

    //  if(user) {
       
      async function userDashboard(){ 
        if(isLoading !== true) {
          const fetchData = useFetch('users', 'GET', null, `/${user.sub}`)
        
          const data = await Promise.resolve(fetchData)
          console.log(data)
          return [data.payload]}
        }
    

      useEffect(()=>{
      async function getUserConsumption(){
        let data = await userDashboard()
        console.log(consumption)
       console.log(waste)
       console.log(donations)

       setConsumption(data[0].consumption)
       setWaste(data[0].wastage)
       setDonations(data[0].donations)

       console.log(waste + donations + consumption)
      }
      if(isLoading !== true) {
        getUserConsumption()

      }

       },[consumption, donations, waste, isLoading]);
      


  useEffect(()=> {
    userPantry()

  }, [isLoading])
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
    async function getData(){
      if(isLoading !== true) {
        const fetchData = useFetch('pantryList', 'GET', null, `/?user_id=${user.sub}`)
        const data = await Promise.resolve(fetchData)
        return data.payload
      }
      }

    async function userPantry() {
      let data = await getData()
      
      if(data) {
        let values =  data.map((d)=> {
          return  d.pantry_items.map((pi)=> {
             let date = dateDif(pi.est_exp)
             return [date, pi.name]
   
           })
         })
         setPantry(values)

      }
    }

    function dateDif(expiryDate){
      let dates = [new Date(), new Date(expiryDate)]

    function daysDifference(d0) {
      var diff = new Date(+d0[1]).setHours(12) - new Date(+d0[0]).setHours(12);
        return Math.round(diff/8.64e7);
      }

      let dateFound = daysDifference(dates);
      return dateFound
}
  
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

function renderButtons() {

  let sortedValues = pantry.sort(function(a,b) {
    console.log(a[0])
    return a[1] - b[1]
  })
    console.log(pantry, sortedValues)
  return sortedValues.map((p, index)=> {
    // console.log(pantry)
    if (pantry.length < 1 ) {
      return <div className={css.err}>You have no items due to expire in your pantry</div>

    } else {
    return p.map((a, index)=> {

      if(index < 3 && a[0] >= 0) {
        return <Col key={a[1]+a[0]} className={css.febtns}>
        <FoodExpiryButton color = {setColor(a[0])} link="/" message = {`${a[1]}. You have ${a[0]} day(s) left`}/>
      </Col>
      }
    })}
  })
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
              <Navbar title="Food Waste Matters!" Icon={MdLabelImportant}/>
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
            <Row className={css.row}><Dashboard waste={waste} donations={donations} consumption={consumption} link="/userInformation" />

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

      const response = await useFetch('users', 'POST', newUser, '')
      // const response = await fetch(`https://waste-want.herokuapp.com/users/` , {
      //       method: 'POST', 
      //       mode: 'cors', // no-cors, *cors, same-origin
      //       cache: 'no-cache', 
      //       credentials: 'same-origin', // include, *same-origin, omit
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       redirect: 'follow', // manual, *follow, error
      //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //       body: JSON.stringify(newUser) // body data type must match "Content-Type" header
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