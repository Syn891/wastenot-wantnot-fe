import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';
import Link from 'next/link';
import DashboardChart from '../DashboardChart';
import css from './Dashboard.module.css';





const Dashboard = ({link, waste, donations, consumption}) => {
    // let image = "../"
   
    return (
        
         
        <Container  className={css.dashBox} >
        <Row><p className={css.dashHeader}>User dashboard: analyse and monitor your food use:</p></Row>
       
        <Row className={css.row}> 
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashRight} value={waste}/></Col>
        </Link>
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashCentre} value={donations} /></Col>
        </Link>
        <Link href={link}>
        <Col xs={{span: 4}}><DashboardChart className={css.dashLeft} value={consumption}/></Col>  
        </Link>
        </Row>
        
        
        

        <Row className={css.row}> 
        <Col xs={4}><p className={css.label}>Wastage</p></Col>
        <Col xs={4}><p className={css.label}>Donations</p></Col>
        <Col xs={4}><p className={css.label}>Consumption</p></Col>
        </Row>
        
          
            
          
  
        </Container>
       
    )
}

export default Dashboard