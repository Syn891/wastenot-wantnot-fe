import React, {useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';
import css from '../styles/UserDashboard.module.css'
import {Row, Col} from 'react-bootstrap'
import { BsFilterSquare} from 'react-icons/bs'
import { AiFillSetting} from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0';
import { FaHandHoldingHeart, FaTrashAlt } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useFetch } from '../hooks/useFetch';

const profile = () => {
    const router = useRouter()
    const user = useUser()
    const [userData, setUserData] = useState()
    const latest = useRef(userData)

    async function getUserData() {
        if(user.isLoading !== true) {
            let data = useFetch('users', 'GET', null, `/${user.user.sub}`)
            data = await Promise.resolve(data)
            return data.payload
        }
    }

    useEffect(async()=> {
       const data = await getUserData()
       setUserData(latest.current = data)
       console.log(data)
    
    }, [user.isLoading])

    function getUserInfo() {
        if(user.isLoading !== true) {
          return  <div className={css.userDetails}>
                    <img src={user.user.picture}/>
                    <div>{user.user.email}</div> 
                </div>     
        }
    }

    function calculatePercentage() {
       
            console.log(latest.current) 
        
        let total = latest.current.wastage + latest.current.consumption + latest.current.donations
        console.log(total)
    }
    return user &&(
        <>
        <div className={css.navDiv}>
           <Navbar  color="#EF8D4B" title={"User Dashboard"}>
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
                    You are at:<span className={css.levelResult}> Expert level!</span>
                </div>
            </Row>
            <Row className={css.row}>
                <div className={css.donated}>
                    <Col xs={{span: 4}} className={css.icon}>
                        <FaHandHoldingHeart size={'3.5em'}/>
                    </Col>
                    <Col xs={{span: 8}} className={css.info}>
                        <div>
                            15% of your food has been donated
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
                            65% of your food has been eaten
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
                            20% of your food has been donated
                        </div>
                    </Col>
                </div>
            </Row>

        </div>

        </>
    )
}

export default profile