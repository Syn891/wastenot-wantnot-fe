import React from 'react'
//import DashboardItem from '../DashboardItem'

// import CanvasJSReact from '../../canvasjs.react';

// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;




// function DashboardChart (){	
//   render() {
//     const options = {
//       title: {
//         text: "Basic Column Chart in React"
//       },
//       data: [{				
//                 type: "column",
//                 dataPoints: [
//                     { label: "Apple",  y: 10  },
//                     { label: "Orange", y: 15  },
//                     { label: "Banana", y: 25  },
//                     { label: "Mango",  y: 30  },
//                     { label: "Grape",  y: 28  }
//                 ]
//        }]
//    }
		
//    return (
//       <div>
//         <CanvasJSChart options = {options}
//             /* onRef = {ref => this.chart = ref} */
//         />
//       </div>
//     );
//   }
// }

// export default DashboardChart

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
     color: "#E38627",
     title: "One",
     value: 30,
     },
     {
     color: "#C13C37",
     title: "Two",
     value: 70,
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
