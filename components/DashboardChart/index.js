import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import css from "./DashboardChart.module.css";

const DashboardChart = ({ value, total, colour1, colour2 }) => {
  let percentage = (value / total) * 100;
  if (total === 0) {
    percentage = 0;
  }

  return (
    <div className={css.DashboardChart}>
      <PieChart
        className={css.DashboardChart}
        animation
        animationDuration={500}
        animationEasing="ease-out"
        center={[50, 50]}
        data={[
          {
            color: "#f1efef",
            title: "Two",
            value: 100 - percentage,
          },
          {
            color: colour1,
            title: "One",
            value: percentage,
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
  );
};
export default DashboardChart;
