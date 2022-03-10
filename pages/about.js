import React from "react"
import Navbar from '../components/Navbar';
import { IoIosArrowBack } from "react-icons/io";
import {RiTeamLine} from "react-icons/ri";
import css from '../styles/About.module.css';
import {Col, Row} from 'react-bootstrap';
import DonationPromptInfo from "../components/DonationPromptInfo";
import { useRouter } from "next/router";
const About = ()=>{
const router = useRouter()

return (
    <div className={css.main}>
    <Navbar Icon={RiTeamLine} color="#EF8D4B" title={"About Us"}>
    <IoIosArrowBack
    size={'1.5em'}
    style={{marginRight:'0.40em' }} onClick={()=> router.back()}/>
  </Navbar>
    <div className={css.body}>
        <Row className={css.row}>
        <Col className={css.col}>
            <Row className={css.title}>
            <Col xs={{span: 8}} className={css.waste}>Food waste matters!</Col> 
            <Col xs={{span: 4}}><img className={css.brand} src="https://i.ibb.co/ZBJCZWg/Wn-Wn-Logo-Black.png"/>
            </Col>
            </Row>
        

        <strong>Waste</strong>Not:<strong>Want</strong>Not! is here to help!<br/><br/>

        In 2021, the Food and Agriculture Organisation of the United Nations estimates that <strong>one third of all food produced in the world is lost or wasted,</strong> while other analysis suggests <strong>8.4 million</strong> people in the UK are <strong>struggling to afford to eat.</strong> <br/><br/>

        The environmental impact of food waste is also significant. In addition to being a contributor to habitat and biodiversity loss, the WWF reports that <strong>food waste is responsible for 9% of total global GHG emissions </strong>- an increase from the previous estimate.<br/><br/>

        <strong>Waste</strong>Not:<strong>Want</strong>Not! is an App which provides <strong>solutions to food wastage</strong> by incorporating food <strong>planning,</strong> conscious <strong>purchasing</strong> and <strong>donating</strong> practices into your everyday life.<br/><br/>

        Together let’s be the sustainable change the world needs!<br/><br/></Col>
        </Row>
    </div>
    <div className={css.donation}>
    <DonationPromptInfo text="Donations needed in your area"
                    className={css.dpiSVG}/>
    </div>
    </div>
)
}
export default About