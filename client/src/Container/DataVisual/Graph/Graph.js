import React from "react";
import Chart from "react-apexcharts";

export default function Graph(props) {
  return (
    <div>
      <Chart
        name="box"
        type="boxPlot"
        series={[
          {
            data: [
              {
                x: ["C02-EMISSION"],
                y: props.value
              },
            ],
          },
        ]}
        options={{
          chart: {
            type: "boxPlot",
            background: "transparent",
            height: 250,
            toolbar: {
              show: false
            }
          },
          theme: {
            mode: "dark"
          },
          legend: {
            show: false
          },
          stroke: {
            show: true,
            lineCap: "butt",
            width: 2,
            colors: ["#C4C4C4"]
          },
          colors: ["#FF4A4A", "#FEB019"]
        }}
      />
    </div>
  );
}
