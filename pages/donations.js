import {React, useEffect, useState} from 'react';
import Navbar from '../components/Navbar'
import NavigationButton from '../components/NavigationButton';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {FaHandHoldingHeart } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import css from '../styles/donations.module.css';
import { useRouter } from "next/router";
import SwipePantryBar from '../components/SwipePantryBar'
import FoodListItem from '../components/FoodListItem';
import DonationsLink from '../components/DonationsLink';
//import css from '../styles/Pantry.module.css'
import FoodCategoryRow from '../components/FoodCategoryRow';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import SwipeBar from '../components/SwipeBar';
import {useFetch} from "../hooks/useFetch.js"


const DonationsPage = () => {
    let user = useUser();
    const [donations, setDonations] = useState ([])

    async function userDonations(){ 
        const fetchData = useFetch('DonationList', 'GET', null, `/?user_id=google-oauth2|114208744455338261066`)
        console.log(fetchData)
        const data = await Promise.resolve(fetchData)
    return data.payload}

    useEffect(async()=>{
      setDonations (await userDonations())
       console.log(Donations)
    },[]);

    function renderListItems(){
        if (donations){
    {return donations.map((f)=> {
        return f.donations_items.map((pi)=>{
                const object = {user_id: "google-oauth2|114208744455338261066",
                    donated_items:[ {
                       name: pi.name,
                       est_exp: pi.est_exp,
                       category: "", 
                       quanitiy: 0,
                       measurement: ""
                  }]}
                return<SwipePantryBar 
                key={pi._id} 
                userId={'google-oauth2|114208744455338261066'} 
                data={pi._id} 
                object_id={f._id}
                object={object}>
                    <FoodListItem color={setColor(1)} name={pi?.name ? pi.name : ""} quantity={pi?.quantity ? pi.quanity : ""} measurement={pi?.measurement ? pi.measurement : ""} />
                     <FoodListItem color={setColor(1)} name={pi.name} quantity={ pi.quanity} measurement={pi.measurement} />

                </SwipePantryBar>
            })
        })

        }} 
    }
    

    const router = useRouter()
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


    //const router = useRouter()
    return (
        
<Container className={css.container}>
        <Row>
        <Navbar Icon={FaHandHoldingHeart} color="#EF8D4B" title={"My Donations"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
          </Navbar>
          </Row>
             <Row className={css.row}>
              <div className={css.donationsTitle}>
                <p>To Donate:</p>
              </div>
            </Row>
            <Row>
            
         <FoodCategoryRow />

        <Container className={css.container}>
        {renderListItems()}
        </Container>

        <SwipeBar />
        

            </Row>

            <Row>
{/* <SwipePantryBar > <FoodListItem name="chicken" quantity="1" measurement="kg" /></SwipePantryBar> */}
            </Row>
        
             <Row className={css.row}>
              <div className={css.donationsTitle}>
                <p>Saved Donation Points:</p>
              </div>
            </Row>
            <Row>
                <DonationsLink link="./donationPoints"/>
            </Row>
            
       
</Container>
    );
};

export default DonationsPage;