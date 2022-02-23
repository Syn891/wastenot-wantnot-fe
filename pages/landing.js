import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Dashboard from '../components/Dashboard';
import DashboardChart from '../components/DashboardChart';
import {Row, Col} from 'react-bootstrap'


const Landing = () => {
    return (
        <div>
            <NavbarBtn />
            <Dashboard />

    
        </div>
    );
};

export default Landing;