import React from 'react';
import NavbarBtn from '../components/NavbarBtn';
import Dashboard from '../components/Dashboard';
import DashboardChart from '../components/DashboardChart';

const Landing = () => {
    return (
        <div>
            <NavbarBtn />
            <Dashboard />
            <DashboardChart />
        </div>
    );
};

export default Landing;