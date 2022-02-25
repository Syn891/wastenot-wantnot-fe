import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';
import Link from 'next/link';
import DashboardChart from '../DashboardChart';
import css from './Dashboard.module.css';





const Dashboard = ({link}) => {
    // let image = "../"
   
    return (
        
         
        <Container  className={css.dashBox} >
        <Row> <p className={css.dashHeader}>User dashboard: analyse and monitor your food use:</p></Row>
       
        <Row> 
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashRight} /></Col>
        </Link>
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashCentre} /></Col>
        </Link>
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashLeft} /></Col>  
        </Link>
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