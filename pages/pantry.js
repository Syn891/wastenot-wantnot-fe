import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { useRouter } from 'next/router';
import css from '../styles/Pantry.module.css'
import { Button, Container } from 'react-bootstrap';
import FoodCategoryRow from '../components/FoodCategoryRow';
import PantryListItem from '../components/PantryListItem'
import SwipePantryBar from '../components/SwipePantryBar';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import {useFetch} from "../hooks/useFetch.js"
import AddItemModal from '../components/AddItemModal';

const Pantry = () => {
    let user = useUser();
    const [pantry, setPantry] = useState ([])
    const [isChecked, setIsChecked] = useState([])
    const [oneChecked, setOneChecked] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [newEntryCount, setNewEntryCount] = useState(0)

    async function userPantry(){ 
        if(user.isLoading !== true) {
            const fetchData = useFetch('pantryList', 'GET', null, `/?user_id=${user.user.sub}`)
            const data = await Promise.resolve(fetchData)
            setIsChecked(new Array(data.payload.length).fill(false))
        return data.payload
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

    function isCheckedFunc(position) {
        console.log(isChecked)
        isChecked.map((checked, index) => {
            if (position === index) {
                let item = isChecked[index]
                setIsChecked([isChecked[index] = !checked])
            }     
        })
    }

    async function save(object) {

        let query= {pantry_items: object}
        const fetchData = useFetch('pantryList', 'PUT', query, `/update/?user_id=${user.user.sub}`)
        let res = await Promise.resolve(fetchData)
        setModalShow(false)
        setNewEntryCount(newEntryCount+1)
        
    }


    useEffect(()=> {
        function test() {
            console.log(isChecked)
            isChecked.map((ic, index)=> {
                if(ic === true) {
                    console.log(pantry)
                }
            })
        }
        test()
    }, [oneChecked] )

    useEffect(async()=>{
      setPantry (await userPantry())
      
    },[user.isLoading, newEntryCount]);

    function calcDate(expiryDate){
        let dates = [new Date(), new Date(expiryDate)]
  
      function daysDifference(d0) {
        var diff = new Date(+d0[1]).setHours(12) - new Date(+d0[0]).setHours(12);
          return Math.round(diff/8.64e7);
        }
  
        let dateFound = daysDifference(dates);
        return dateFound
    }

    function renderListItems(){

        if (pantry && user){
    {return pantry.map((f)=> {
        return f.pantry_items.map((pi, index)=>{
            let date = new Date(pi.est_exp)
            let dateString = date.toLocaleDateString('en-GB');
            let dateDif = calcDate(pi.est_exp)
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
                    
                    <PantryListItem onChange={() => isCheckedFunc(index)} color={setColor(dateDif)} name={pi?.name ? pi.name : ""} quantity={pi?.quantity ? pi.quantity : ""} measurement={pi?.measurement ? pi.measurement : ""} expiry={dateString}/>
                </SwipePantryBar>
            })
        })

        }} 
    }


  useEffect(async () => {
    setPantry(await userPantry());
  }, [user.isLoading]);



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

        <Container className={css.input}>
            <Button onClick={() => setModalShow(true)} className={css.addItem}>Add Item to Pantry</Button>
        </Container>
        <AddItemModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          save={save}
        />

        </div>
    );
};

export default Pantry
