import React from 'react';
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from 'next/router';
import css from '../styles/Pantry.module.css'
import { Container } from 'react-bootstrap';
import FoodCategoryRow from '../components/FoodCategoryRow';
import FoodListItem from '../components/FoodListItem'
import SwipeBar from '../components/SwipeBar';
const Pantry = () => {
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
<SwipeBar />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />

            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(9)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(5)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem  name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />
            <FoodListItem color={setColor(1)} name="chicken" quantity="1" measurement="kg" />


        </Container>
        </div>
    );
};

export default Pantry;