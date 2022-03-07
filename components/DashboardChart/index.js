import React from 'react'
import { PieChart } from "react-minimal-pie-chart";
import css from "./DashboardChart.module.css";



const DashboardChart = ({value}) => {
  return (
    <div className={css.DashboardChart}>
      



<PieChart className={css.DashboardChart} 
   animation
   animationDuration={500}
   animationEasing="ease-out"
   center={[50, 50]}
   data={[
     {
     color: "#F1AC79",
     title: "One",
     value: value,
     },
     {
     color: "#C13C37",
     title: "Two",
     value: 100-value,
     },
     
   ]}
   labelPosition={50}
   lengthAngle={360}
   lineWidth={15}
   paddingAngle={0}
   radius={20}
   rounded
   startAngle={0}
   viewBoxSize={[100, 100]}
      />
    </div>
  )
}
      export default DashboardChart
