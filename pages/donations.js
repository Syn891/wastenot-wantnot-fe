import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Row } from "react-bootstrap";
import { Container, Dropdown } from "react-bootstrap";
import css from "../styles/donations.module.css";
import { useRouter } from "next/router";
import SwipeDonationsBar from "../components/SwipeDonationsBar";
import FoodListItemDonate from "../components/FoodListItemDonate";
import DonationsLink from "../components/DonationsLink";
import FoodCategoryRow from "../components/FoodCategoryRow";
import { useUser } from "@auth0/nextjs-auth0";
import { useFetch } from "../hooks/useFetch.js";


const DonationsPage = ({ trueFalseArraySL, setTrueFalseArraySL }) => {
  const { user, error, isLoading } = useUser();
  const [donations, setDonations] = useState ([]);
  const [donationBanks, setDonationBanks] = useState ([]);


  const router = useRouter();

  async function renderDonationBanks(){

    if(isLoading !== true) {
      let data = useFetch('donationbank', 'GET', null, `/?user_id=${user.sub}`)
      data = await Promise.resolve(data)
      console.log(data)
      setDonationBanks(data.payload[0].donation_banks)
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

    async function userDonations(){ 
      if(isLoading !== true){
        console.log(user);
        console.log(user.sub)
        const fetchData = useFetch('donations', 'GET', null, `/?user_id=${user.sub}`)
       
        const data = await Promise.resolve(fetchData);
         const donationsData = data.payload[0].donated_items;
         console.log(donationsData)
         setDonations(donationsData);
     
    }
  }

  function loadDonationBanks() {
    if(donationBanks.length > 0) {
      donationBanks.map((d)=> {
        console.log(d.name)

        return <div>d.name</div>

        // return  <Dropdown.Item className={css.dropDownItem}>
        //             {d.name}
        //             {d.address} 
        //             {d.phone}
        //           </Dropdown.Item>
      })
    }
  }

 
useEffect(() => {

    userDonations();
    renderDonationBanks();

  }, [isLoading]);

  return donations && user? (
    <>
    <Row className={css.navDiv}> 
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
    <Container className={css.container}>
      <Row className={css.row}>
        <div className={css.donationsTitle}>
          <div>To Donate:</div>
        </div>
      </Row>
      <Row className={css.row, css.foodRow}>
        <FoodCategoryRow />
      </Row>
      <Row className={css.container1}>

        {donations.map(function (item, index) {
          return (
            <Row className={css.swipeRow}>
              <SwipeDonationsBar
                data={item._id}
              >
                <FoodListItemDonate
                  // {...item}
                  key={item._id}
                  index={index}
                  listItem={item}
                  name={item.name}
                  quantity={item.quantity}
                  measurement={item.measurement}
                />
                </SwipeDonationsBar>
              </Row>
              ) })}
        </Row>

           
        
        
             <Row className={css.row}>
                <Dropdown>
                   <Dropdown.Toggle id="dropdown-button-dark-example1" className={css.donationsSubTitle} variant="success" >
                   Saved Donation Points:
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                  {loadDonationBanks()}
                    

                    </Dropdown.Menu>
                </Dropdown>
              

              {/* <>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  
</> */}
            </Row>
            <Row>
                <DonationsLink link="./donationPoints"/>
            </Row>
            
       
 </Container>
 </>
    ):(<>You haven't donated anything yet</>)
};

export default DonationsPage;
