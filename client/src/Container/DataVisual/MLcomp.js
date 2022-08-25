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
              data: [98.90,99.26],
              },
              {
                name: 'KNN',
              data: [96.99,97.24]
              },
              {
                name: 'Linear Regression',
              data: [96.51,94.99]
              },
              {
                name: 'Decision Tree',
              data: [98.96,98.81]
              },
              
              {
                name: 'SVM',
              data: [93.94,91.61]
              },
              
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
                  show:true,
                    
                    style:{
                        colors:['#ffffff']
                    }
                },


                categories: [
                  "Validation Accuracy",
                  "Test Accuracy",
            ,
                ],
                
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