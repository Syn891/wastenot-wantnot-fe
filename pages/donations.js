import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NavigationButton from "../components/NavigationButton";
import { IoIosArrowBack } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import css from "../styles/donations.module.css";
import { useRouter } from "next/router";
import SwipePantryBar from "../components/SwipePantryBar";
import FoodListItem from "../components/FoodListItem";
import DonationsLink from "../components/DonationsLink";

//import css from '../styles/Pantry.module.css'
import FoodCategoryRow from "../components/FoodCategoryRow";
import { useUser, getSession } from "@auth0/nextjs-auth0";
import SwipeBar from "../components/SwipeBar";
import { useFetch } from "../hooks/useFetch.js";
import AssignItem from "../components/EatConsumeDonate";
import FoodListItemDonate from "../components/FoodListItemDonate";



  // .map(function (item, index) {
  //   if (trueFalseArrayDL[index]) {
  //     console.log(donations[index], "shop list data at index: ", index);
  //     ewdList.push(item);
  //   }
  //   console.log(ewdList.length)
  //   // console.log("Pantry List is ", pantryList);
  //   return ewdList.length;
    //app.push pantry list to database
  
   
// function handleEatWasteDonateClick(donations) {
//   console.log(trueFalseArrayDL, "Donations TF Array");
//   //tried for and mapping, tried spreading, think the use state is being continually called and resetting it
//   let ewdList = [];
//   donations.map(function (item, index) {
//     if (trueFalseArrayDL[index]) {
//       console.log(donations[index], "shop list data at index: ", index);
//       ewdList.push(item);
//     }
//     console.log(ewdList.length)
//     // console.log("Pantry List is ", pantryList);
//     return ewdList.length;
//     //app.push pantry list to database
//   })}
  
  

//   //onclick of the green button call the handleEatWasteDonateClick function to make an array of the checked items
//   // check the length of the array to calculate how many items are being assigned
//   //on click of the modal done button 
// fetch user collection and add this value to eaten, wasted or donated depending on which radio is selected.
//   //
  
// //   async function submitMeal(event) {
// //     const fetchedData = useFetch('donationslist', 'GET', null, `/?user_id=${userId}`)
// //     const response = await Promise.resolve(fetchedData)
// //     if(response.payload.length < 1) {
// //       useFetch('mealPlan', 'POST', data, '' )
// //     }
// //     else {
// //       let query = {meal_plan: data.meal_plan[0]}
// //       useFetch('mealPlan', 'PUT', query,`/update/?user_id=${userId}` )
// //     }
// //     handleToggle()
// //   }
// // let eatList=[]

// async function handleDoneClick(){
//    const fetchedData = useFetch('users', 'GET', null, `/?user_id=${userId}`)
//     const response = await Promise.resolve(fetchedData)
//    if(radioValue === 'Eaten'){
//      let newConsumption = consumption + ewdList.length
//      console.log(newConsumption)
//      let query= {consumption} //let user.consumption = consumption + ewdlist.length
//       useFetch('users', 'PUT', query, `/update/?user_id=${userId}`)

// }
// }



const DonationsPage = ({trueFalseArraySL, setTrueFalseArraySL}) => {
    let user = useUser();
    const [donations, setDonations] = useState ([]);
    const [trueFalseArraySL, setTrueFalseArraySL] = useState(
    //itll be this logic for donations and pantry
    // new Array(donations.length).fill(false)
  );//google-oauth2|108124826364307880117

    async function userDonations(){ 
        const fetchData = useFetch('donations', 'GET', null, `/?user_id=google-oauth2|108124826364307880117`)
       
        const data = await Promise.resolve(fetchData);
         console.log('data is fetched', data)
         const donationsData = data.payload.donated_items;
         console.log(donationsData)
         setTrueFalseArraySL(new Array(donationsData.length).fill(false));
         setDonations(donationsData);
         console.log(donations)
    
         
         console.log(trueFalseArraySL)
    }
    // return data.payload}

    // useEffect(()=>{
    //   async function getUserDonations(){
    //   setDonations (await userDonations())
    //   console.log(data)
    //    console.log(donations)
    // }
    // getUserDonations()}
    // ,[]);

    
useEffect(() => {
    userDonations();
    console.log(donations)
  }, []);
  
  function handleEatWasteDonateClick({trueFalseArrayDL}) {
  console.log(trueFalseArrayDL, "Donations TF Array");
  //tried for and mapping, tried spreading, think the use state is being continually called and resetting it
  
 let trueArray = trueFalseArrayDL.filter(true)
 console.log('true Array', trueArray)
 return trueArray.length
  }

  //   function renderListItems(){
  //       if (donations){
  //   {return donations.map((f)=> {
  //       return f.donations_items.map((di)=>{
  //               const object = {user_id:  user.user.sub,
  //                   donated_items:[ {
  //                      name: di.name,
  //                      est_exp: di.est_exp,
  //                      category: "", 
  //                      quanitiy: 0,
  //                      measurement: ""
  //                 }]}
  //               return<SwipePantryBar 
  //               key={di._id} 
  //               userId={"google-oauth2|108124826364307880117"} 
  //               data={di._id} 
  //               object_id={f._id}
  //               object={object}
  //             >
  //               <FoodListItem
  //                 color={setColor(1)}
  //                 name={di?.name ? di.name : ""}
  //                 quantity={di?.quantity ? di.quanity : ""}
  //                 measurement={di?.measurement ? di.measurement : ""}
  //               />
  //               {/* <FoodListItem
  //                 color={setColor(1)}
  //                 name={di.name}
  //                 quantity={di.quanity}
  //                 measurement={di.measurement}
  //               /> */}
  //             </SwipePantryBar>
  //           ;
  //         });
  //       });
  //     }
  //   }
  // }

  const router = useRouter();
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

  //const router = useRouter()
  return  donations ?(
    <Container >
      <Row>
        <Navbar
          Icon={FaHandHoldingHeart}
          color="#EF8D4B"
          title={"My Donations"}
        >
          <IoIosArrowBack
            size={"1.5em"}
            style={{ marginRight: "0.25em" }}
            onClick={() => router.back()}
          />
        </Navbar>
      </Row>
      <Row className={css.row}>
        <div className={css.donationsTitle}>
          <p>To Donate:</p>
        </div>
      </Row>
      <Row>
        <FoodCategoryRow />
        </Row>
        <Row className={css.container1}>
        {/* <Container className={css.container1}> */}
{donations.map(function(item, index){
  return(
           
              <Row>
              <SwipePantryBar>
                <FoodListItem
                  // {...item}
                  key={item._id}
                  index={index}
                  listItem={item}
                  name={item.name}
                  quantity={item.quantity}
                  measurement={item.measurement}
                  // setDonationsData={setDonationsData}
                  defaultChecked={false}
                  // trueFalseArraySL={trueFalseArraySL}
                  // setTrueFalseArraySL={trueFalseArraySL}
                />
                </SwipePantryBar>
              </Row>
              
           
  ) })}
  </Row>
 

{/* })} </Container> */}
            
        {/* <Container className={css.container1}>{renderListItems()}</Container> */}

        
        

           
            <Row>
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
              <AssignItem onClick={handleEatWasteDonateClick} /> 
            </Row> 
            <Row>
                <DonationsLink link="./donationPoints"/>
            </Row>
            
       
 </Container>
    ):(<>You haven't donated anything yet</>)
};

export default DonationsPage;

