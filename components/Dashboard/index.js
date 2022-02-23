import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DashboardItem from '../DashboardItem';
import css from './Dashboard.module.css';
import Link from 'next/link';
import DashboardChart from '../DashboardChart';




const Dashboard = () => {
    // let image = "../"
    function handleClick(){

    }
    return (
        
            
        <div className={css.dashBox}>
        <Row> <p className={css.dashHeader}>User dashboard: analyse and monitor your food use:</p></Row>
        <Row> 
        <Col xs={4}><DashboardChart className={css.dashRight} onClick={handleClick} text={`Food donated`}/></Col>
        <Col xs={4}><DashboardChart className={css.dashCentre} onClick={handleClick} text={`Wastage meter`}/></Col>
        <Col xs={4}><DashboardChart className={css.dashLeft} onClick={handleClick} text={`Consumption`}/></Col>  
        </Row>

        <Row> 
        <Col xs={4}>Wastage</Col>
        <Col xs={4}>Donations</Col>
        <Col xs={4}>Consumption</Col>
        </Row>
        
           
            
          
  
        </div>
    )
}

export default Dashboard