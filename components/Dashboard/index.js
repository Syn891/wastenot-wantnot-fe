import React from 'react';
import DashboardItem from '../DashboardItem';
import css from './Dashboard.module.css';
import Link from 'next/link';



const Dashboard = () => {
    // let image = "../"
    function handleClick(){

    }
    return (
        
            
        <div className={css.dashBox}>
            <p className={css.dashHeader}>User dashboard: analyse and monitor your food use:</p>
            <div>
            <DashboardItem className={css.dashRight} onClick={handleClick} text={`Food donated`}/>
            <DashboardItem className={css.dashCentre} onClick={handleClick} text={`Wastage meter`}/>
            <DashboardItem className={css.dashLeft} onClick={handleClick} text={`Consumption`}/>
        </div>
  
        </div>
    )
}

export default Dashboard