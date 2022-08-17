import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function Graph(props) {
  return (
    <Wrap>
      <Chart
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
            show: true
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
    </Wrap>
  );
}


const Wrap = styled.div`
  width: 50%;
  padding: 100px 20px 20px 20px;

`