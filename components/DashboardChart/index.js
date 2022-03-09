import React from 'react'
import { PieChart } from "react-minimal-pie-chart";
import css from "./DashboardChart.module.css";



const DashboardChart = ({value, total, colour1, colour2}) => {

   
  return (
    <div className={css.DashboardChart}>
      



<PieChart className={css.DashboardChart} 
   animation
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]}
   data={[
      {
     color:"#f1efef" ,
     title: "Two",
     value: 100-value,
     },
     {
     color: colour1,
     title: "One",
     value: value/total * 100,
     },
    
     
   ]}
   labelPosition={50}
   lengthAngle={360}
   lineWidth={35}
  //  paddingAngle={0}
   radius={30}
   rounded
   startAngle={0}
  //  viewBoxSize={[0, 80]}
      />
    </div>
  )
}
      export default DashboardChart
