import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';
import css from '../styles/UserDashboard.module.css'
import {Row, Col} from 'react-bootstrap'
import { BsFilterSquare} from 'react-icons/bs'
import { AiFillSetting, AiFillTrophy} from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0';
import { FaHandHoldingHeart, FaTrashAlt, FaUserAlt } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useFetch } from '../hooks/useFetch';

const profile = () => {
    
    const router = useRouter()
    const user = useUser()
    const [userData, setUserData] = useState()
    const [level, setLevel] = useState('')

    async function getUserData() {
        if(user.isLoading !== true) {
            let data = useFetch('users', 'GET', null, `/${user.user.sub}`)
            data = await Promise.resolve(data)
            return data.payload
        }
    }

    useEffect(async()=> {
       const data = await getUserData() 
       setUserData(data)
    }, [user.isLoading])

    useEffect(async()=>{
        let level = getLevel();
         setLevel(level)
    }, [userData] )

    function getColor() {
        if(level === 'Expert') {
            return 'gold'
        } else {
            return 'brown'
        }
    }
    function getUserInfo() {
        if(user.isLoading !== true) {
          return  <div className={css.userDetails}>
                    <img className={css.image} src={user.user.picture}/>
                    <AiFillTrophy  className={css.trophy} fill={getColor()} size={'2.5em'}/>
                    <div>{user.user.email}</div> 
                </div>     
        }
    }

    function calculatePercentage(key) {

        
        if(userData) {

            let total = userData.wastage + userData.consumption + userData.donations
            let percentage = userData[key]/total * 100
            if(total === 0){
                percentage = 0
            }
            return Math.round(percentage * 10)/10
        }
        
    }

    function getLevel() {
        let level = ""
        if(userData) {
            if(userData.wastage > userData.consumption 
                && userData.wastage > userData.donations) {
                   level = 'Beginner'
            } else {
                level = 'Expert'
            }
        } return level;
     
    }

    
   
    return user &&(
        <>
        <div className={css.navDiv}>
           <Navbar  color="#EF8D4B" title={"User Dashboard"} Icon={FaUserAlt}>
         <IoIosArrowBack
         size={'1.5em'}
         style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
         </Navbar>
        </div>
        <div className={css.userDashboard}>
            <Row className={css.row}>
                <Col xs={{span: 2}}  className={css.head}>
                    <BsFilterSquare size={'2.5em'}/>
                </Col>
                <Col xs={{span: 8}}  className={css.head}>
                   <div className={css.headText}>
                       <span className={css.span}><strong>Analyse </strong> your <strong> food use</strong><br/></span> 
                        + customise your app
                   </div> 
                </Col>
                <Col xs={{span: 2}}  className={css.head}>
                    <AiFillSetting size={'3em'}/>    
                </Col>     
            </Row>
            <Row className={css.row}>
                {getUserInfo()}
            </Row>
            <Row className={css.row}>
                <div className={css.level}>
                    You are at:&nbsp; <span className={css.levelResult}> {level} level!</span>
                </div>
            </Row>
            <Row className={css.row}>
                <div className={css.donated}>
                    <Col xs={{span: 4}} className={css.icon}>
                        <FaHandHoldingHeart size={'3.5em'}/>
                    </Col>
                    <Col xs={{span: 8}} className={css.info}>
                        <div>
                            {calculatePercentage('donations')}% 
                             of your food has been donated
                        </div>
                    </Col>
                </div>
            </Row>
            <Row className={css.row}>
                <div className={css.eaten}>
                    <Col xs={{span: 4}} className={css.icon}>
                        <GiForkKnifeSpoon size={'3.5em'} />
                    </Col>
                    <Col xs={{span: 8}} className={css.info}>
                        <div>
                            {calculatePercentage('consumption')}% 
                             of your food has been eaten
                        </div>
                    </Col>
                </div>
            </Row>
            <Row className={css.row}>
                <div className={css.wasted}>
                    <Col xs={{span: 4}} className={css.icon}>
                        <FaTrashAlt size={'3.5em'} />
                    </Col>
                    <Col xs={{span: 8}} className={css.info}>
                        <div>
                        {calculatePercentage('wastage')}%
                         of your food has been wasted
                        </div>
                    </Col>
                </div>
            </Row>

        </div>

        </>
    )
}

export default profile