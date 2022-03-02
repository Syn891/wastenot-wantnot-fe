import React from 'react'
import {useState, useEffect} from 'react'
import Dashboard from '../components/Dashboard';
import { useUser, getSession } from '@auth0/nextjs-auth0';

const Test = () => {

    let user = useUser();
    const [waste, setWaste] =useState(0);
    const [donations, setDonations] = useState(0);
    const [consumption, setConsumption]= useState(0);



 useEffect(()=>{
    async function getUserWastage(){
        const id="auth0|6217832025ea850070393ba0"
        const response = await fetch(`https://waste-want.herokuapp.com/?user_id=${user.user.sub}`)
        const data= await response.json();
        console.log(data.payload)
        setWaste(data.payload.wastage)


    }
    getUserWastage();
}, [waste])



 useEffect(()=>{
    async function getUserDonations(){
        const id="auth0|6217832025ea850070393ba0"
        const response = await fetch(`https://waste-want.herokuapp.com/users/${id}`)
        const data= await response.json();
        setDonations(data.payload.donations)


    }
    getUserDonations();
}, [donations])


useEffect(()=>{
    async function getUserConsumption(){
        const id="auth0|6217832025ea850070393ba0"
        const response = await fetch(`https://waste-want.herokuapp.com/users/${id}`)
        const data= await response.json();
        setConsumption(data.payload.consumption)


    }
    getUserConsumption();
}, [consumption])

  return (
    <div>
    <p>waste:{waste}</p>
    <Dashboard waste={waste} donations={donations} consumption={consumption} link="/userInformation"/>
    </div>
  )
}




export default Test;

// 