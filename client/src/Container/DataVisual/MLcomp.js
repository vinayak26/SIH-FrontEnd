import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function MLcomp() {
  return (
    <div>
      <Text>
        <h1>ML Models Comparison Via Graph</h1>
      </Text>
      <Container>
      <GraphBlock>
          <Chart
          type="bar"
          width={700}
          height={600}
            series={[
              {
                name: 'Random Forest',
              data: [98.60,98.84,98.02]
              },
              {
                name: 'Decision Tree',
              data: [98.90,98.44,97.51]
              },
              {
                name: 'KNN',
              data: [95.08,95.88,95.55]
              },
              {
                name: 'SVM',
              data: [92.81,91.27,91.03]
              },
              {
                name: 'Linear Regression',
              data: [96.11,95.38,89.38]
              }
            ]}
            options={{
                theme:{
                    mode:"dark"
                },
              plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
                },
                dataLabels:{
                    enabled:false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
              
              xaxis: {
                labels:{
                  show:false,
                    
                    style:{
                        colors:['#ffffff']
                    }
                },


                // categories: [
                //   "Random Forest",
                //   "Decision Tree",
                //   "KNN Models",
                //   "SVM",
                //   "Linear Regression",
                // ],
                
              },
              grid: {
                padding: {
                  left: 60,
                  right: 60,
                }
              },
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    chart: {
                      height: '250',
                      width: '250'
                    },
                    legend: {
                      show:false
                    }
                  }
                }
              ]
            }}
            
          />
          </GraphBlock>
          </Container>
    </div>
  );
}

const Text = styled.div`
padding: 80px 0 0 0;
background-color: black;
text-align: right;
height: 80px;
`;

const GraphBlock = styled.div`
  margin: auto;
  padding-top:10rem;
`
const Container = styled.div`
display: flex;
  background-color: #030f18;
  height: 100vh;
  width:100%;
`