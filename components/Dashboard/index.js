import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';

import css from './Dashboard.module.css';
import Link from 'next/link';
import DashboardChart from '../DashboardChart';





const Dashboard = () => {
    // let image = "../"
   
    return (
        
         
        <Container  className={css.dashBox} >
        <Row> <p className={css.dashHeader}>User dashboard: analyse and monitor your food use:</p></Row>
       
        <Row> 
        <Col xs={{span: 4}}><DashboardChart className={css.dashRight} /></Col>
        <Col xs={{span: 4}}><DashboardChart className={css.dashCentre} /></Col>
        <Col xs={{span: 4}}><DashboardChart className={css.dashLeft} /></Col>  
        </Row>
        
        

        <Row> 
        <Col xs={4}><p>Wastage</p></Col>
        <Col xs={4}><p>Donations</p></Col>
        <Col xs={4}><p>Consumption</p></Col>
        </Row>
        
          
            
          
  
        </Container>
       
    )
}

export default Dashboard