import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import DonationPromptInfo from '../components/DonationPromptInfo';
import {Button, Col, Row} from 'react-bootstrap'
import css from '../styles/Landing.module.css'
import NavigationButton from '../components/NavigationButton';
import FoodExpiryButton from '../components/FoodExpiryButton';
import {FaHandHoldingHeart } from "react-icons/fa";
import {TiShoppingCart} from 'react-icons/ti'
import {RiFridgeLine} from 'react-icons/ri'
import {GiForkKnifeSpoon, GiKnifeFork} from 'react-icons/gi'
import { useUser } from '@auth0/nextjs-auth0';

const Landing = ({users}) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

      //   const response = await fetch(userURL , {
      //     method: 'POST', 
      //     mode: 'cors', // no-cors, *cors, same-origin
      //     cache: 'no-cache', 
      //     credentials: 'same-origin', // include, *same-origin, omit
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     redirect: 'follow', // manual, *follow, error
      //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //     body: JSON.stringify(newUser) // body data type must match "Content-Type" header
      //   });
      //   console.log(response.json); // parses JSON response into native JavaScript objects
      // }
    
    // }
      // submitUser()
  // })
  

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
      user && (
        <Col className={css.view}>
            <Row className={css.row}>
              <Banner title="WasteNot-WantNot"/>  
            </Row>
            <Row className={css.row}></Row>
            <Row className={css.row}></Row>
            <Row className={css.row}>
              <Col>
                <FoodExpiryButton color = {setColor(2)} link="/" message = "Eggs. You have 2 day left"/>
              </Col>
              <Col>
                <FoodExpiryButton color = {setColor(5)} link="/" message = "Eggs. You have 5 day left"/>
              </Col>
              <Col>
                <FoodExpiryButton color = {setColor(9)} link="/" message = "Eggs. You have 9 day left"/>
              </Col>
            </Row>
                                           
            <Row className={css.row}></Row>
            <Row className={css.row}>
                <DonationPromptInfo 
                    text="...Or donate items to orgnisations in need, here:"
                    className={css.dpiSVG}/>
            </Row>
            <Row className={css.row}>
                <Col className={css.col}>
                    <NavigationButton color="#94DEB2" link="/"Icon={TiShoppingCart}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#5CC971" link="/"Icon={RiFridgeLine}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#F1AC79" link="/"Icon={GiForkKnifeSpoon}/>
                </Col>
                <Col className={css.col}>
                    <NavigationButton color="#EF8D4B" link="/donations"Icon={FaHandHoldingHeart}/>
                </Col>
            </Row>
            <Row className={css.row}>
            <a  href = "/api/auth/logout"><Button>Logout</Button></a>
            </Row>
            <h1>{users.name}</h1>
        </Col>
    ));
    
};

export async function getServerSideProps(user) {
  const res = await fetch(`http://localhost:3001/users/${user.sub}`);
  const users = await res.json();

  return {
    props: { users },
  };
}

export default Landing;