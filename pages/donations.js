import React from 'react'
import Navbar from '../components/Navbar'
import NavigationButton from '../components/NavigationButton';
import { IoIosArrowBack } from "react-icons/io";
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {FaHandHoldingHeart } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import css from '../styles/donations.module.css';
import { useRouter } from "next/router";

const DonationsPage = () => {

    const router = useRouter()
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
        
             <Row className={css.row}>
              <div className={css.donationsTitle}>
                <p>Saved Donation Points:</p>
              </div>
            </Row>
            
       
</Container>
    );
};

export default DonationsPage;