import React from 'react'
import {useState, useEffect} from 'react'
import Dashboard from '../components/Dashboard';

const Test = () => {

    const [waste, setWaste] =useState(0);
    // const [donations, setDonations] = useState();
    // const [consumption, setConsumption]= useState();

 useEffect(()=>{
    async function getUserWastage(){
        const id="620fad130ff39d66394b8b64"
        const response = await fetch(`https://waste-want.herokuapp.com/users/${id}`)
        const data= await response.json();
        setWaste(data.payload.wastage)


    }
    getUserWastage();
}, [waste])

// const [donations, setDonations] = useState();

//  useEffect(()=>{
//     async function getUserDonations(){
//         const id="620fad130ff39d66394b8b64"
//         const response = await fetch(`https://waste-want.herokuapp.com/users/${id}`)
//         const data= await response.json();
//         setDonations(data.payload.donations)


//     }
//     getUserDonations();
// }, [donations])

//     const [consumption, setConsumption]= useState();

// useEffect(()=>{
//     async function getUserConsumption(){
//         const id="620fad130ff39d66394b8b64"
//         const response = await fetch(`https://waste-want.herokuapp.com/users/${id}`)
//         const data= await response.json();
//         setConsumption(data.payload.consumption)


//     }
//     getUserConsumption();
// }, [consumption])

  return (
    <div>
    <p>waste:{waste}</p>
    <Dashboard waste={waste}  link="/userInformation"/>
    </div>
  )
}




export default Test;

// donations={donations} consumption={consumption}