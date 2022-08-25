import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function MLcomp() {
  return (
    <div>
      <Container>
        <Text>
          <h1>ML Models Comparison Via Graph</h1>
        </Text>
        <GraphBlock>
          <Chart
            type="bar"
            width={700}
            height={600}
            series={[
              {
                name: "Random Forest",
                data: [98.9, 99.26],
              },
              {
                name: "KNN",
                data: [96.99, 97.24],
              },
              {
                name: "Linear Regression",
                data: [96.51, 94.99],
              },
              {
                name: "Decision Tree",
                data: [98.96, 98.81],
              },

              {
                name: "SVM",
                data: [93.94, 91.61],
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  endingShape: "rounded",
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
              },

              xaxis: {
                labels: {
                  show: true,

                  style: {
                    colors: ["#ffffff"],
                  },
                },

                categories: ["Validation Accuracy", "Test Accuracy", ,],
              },
              grid: {
                padding: {
                  left: 60,
                  right: 60,
                },
              },
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
                      height: "250",
                      width: "250",
                    },
                    legend: {
                      show: true,
                    },
                  },
                },
              ],
              colors: ["#0099cc", "#ff6666", "#009900", "#ffcc66", "#cc99ff"],
            }}
          />
        </GraphBlock>
      </Container>
    </div>
  );
}

const Text = styled.div`
  padding: 2rem 0 0 50rem;
  padding: 80px 0 0 0;
  background-color: #52686a;
  height: 80px;
  text-align:right;
`;

const GraphBlock = styled.div`
  margin: auto;
  // height: 100%;
  // width: 100%;
  // padding: 5rem 0 0 40rem;
  padding-top:10rem;
`;
const Container = styled.div`
display:flex;
  background-color: #52686a;
  height: 100vh;
  width: 100%;
`;
