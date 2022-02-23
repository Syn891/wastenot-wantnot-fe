import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Dashboard from '../components/Dashboard';
import DashboardChart from '../components/DashboardChart';
import {Row, Col} from 'react-bootstrap'


const Landing = () => {
    return (
        <div>
           
            <Dashboard link="/userInformation" />

    
        </div>
    );
};

export default Landing;