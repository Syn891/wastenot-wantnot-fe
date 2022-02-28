import React from 'react';
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from 'next/router';
import css from '../styles/Pantry.module.css'
import { Container } from 'react-bootstrap';
import FoodCategoryRow from '../components/FoodCategoryRow';
import FoodListItem from '../components/FoodListItem'
import SwipePantryBar from '../components/SwipePantryBar';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import SwipeBar from '../components/SwipeBar';


const Pantry = ({pantryItems}) => {
    
    let user = useUser();
    let filteredItems = []
    
    if(pantryItems.payload.length > 0){
        pantryItems.payload.map((p)=> {
        if(p.user_id === user.user.sub) {
            filteredItems.push(p)   
        }
    })}

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
        {filteredItems.map((f)=> {
            return f.pantry_items.map((pi)=> {
                return <SwipePantryBar>            
                    {/* <FoodListItem color={setColor(1)} name={pi?.name ? pi.name : ""} quantity={pi?.quantity ? pi.quanity : ""} measurement={pi?.measurement ? pi.measurement : ""} /> */}
                    <FoodListItem color={setColor(1)} name={pi.name} quantity={ pi.quanity} measurement={pi.measurement} />

                </SwipePantryBar>
            })
        })}
        </Container>

        <SwipeBar />
        </div>
    );
};


export async function getServerSideProps(user) {
        let pantryItems = await fetch(`https://waste-want.herokuapp.com/pantrylist/`)
        pantryItems = await pantryItems.json()
    
        return {props: {pantryItems: pantryItems}}
    
}
export default Pantry;