import {React, useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from 'next/router';
import css from '../styles/Pantry.module.css'
import { Container } from 'react-bootstrap';
import FoodCategoryRow from '../components/FoodCategoryRow';
import PantryListItem from '../components/PantryListItem'
import SwipePantryBar from '../components/SwipePantryBar';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import SwipeBar from '../components/SwipeBar';
import {useFetch} from "../hooks/useFetch.js"

const Pantry = () => {
    let user = useUser();
    const [pantry, setPantry] = useState ([])
    // const [isChecked, setIsChecked] = useState(new Array(pantry.length).fill(false))


    async function userPantry(){ 
        if(user.isLoading !== true) {
            console.log(user)
            const fetchData = useFetch('pantryList', 'GET', null, `/?user_id=${user.user.sub}`)
            console.log(fetchData)
            const data = await Promise.resolve(fetchData)
        return data.payload
        }
        }

    useEffect(async()=>{
      setPantry (await userPantry())
       console.log(pantry)
    },[user.isLoading]);

    function renderListItems(){
        if (pantry && user){
    {return pantry.map((f)=> {
        return f.pantry_items.map((pi)=>{
            let date = new Date(pi.est_exp)
            let dateString = date.toLocaleDateString('en-GB');
                const object = {user_id: user.user.sub,
                    donated_items:[ {
                       name: pi.name,
                       est_exp: pi.est_exp,
                       category: "", 
                       quanitiy: 0,
                       measurement: ""
                  }]}
                return<SwipePantryBar 
                key={pi._id} 
                userId={user.user.sub} 
                data={pi._id} 
                object_id={f._id}
                object={object}>
                    <PantryListItem color={setColor(1)} name={pi?.name ? pi.name : ""} quantity={pi?.quantity ? pi.quanity : ""} measurement={pi?.measurement ? pi.measurement : ""} expiry={dateString}/>

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


    return (
        <div className={css.body}>
        <Navbar Icon={GiForkKnifeSpoon} color="#EF8D4B" title={"My Pantry"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
        </Navbar>
         <FoodCategoryRow />

        <Container className={css.container}>
        {renderListItems()}
        </Container>

        <SwipeBar />
        </div>
    );
};

export default Pantry;