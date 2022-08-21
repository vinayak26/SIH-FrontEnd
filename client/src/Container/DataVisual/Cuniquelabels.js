import React from "react";
// import { CopyBlock, googlecode } from "react-code-blocks";
import Chart from "react-apexcharts";
// import {
//   uniquelables,
//   uniquelables2,
//   uniquelables3,
//   uniquelables4,
//   uniquelables5,
// } from "../../utilities/codes";
import styled from "styled-components";

function Cuniquelabels() {
  return (
    <div>
      <Text>
        <h1>
          Calculating Number Of Unique Labels Per Feature To Perform One Hot
          Encoding
        </h1>
      </Text>
      <Container>
        <GraphBlock>
          <Chart
            type="bar"
            height={500}
            width={700}
            series={[
              {
                data: [40, 662, 17, 23, 5],
              },
            ]}
            options={{
              colors: [
                "#FF974A",
                "#FC5A5A",
                "#82C43C",
                "#A461D8",
                "#FF9AD5",
                "#50B5FF",
              ],
              plotOptions: {
                bar: {
                  distributed: true,
                  dataLabels: {
                    position: "top",
                  },
                },
              },
              xaxis: {
                categories: [
                  "MAKE",
                  "MODEL",
                  "VEHICLECLASS",
                  "TRANSMISSION",
                  "FUELTYPE",
                ],
                labels: {
                  show: false,
                },
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
                      position: "bottom"
                    }
                  }
                }
              ]
            }}
          />
        </GraphBlock>
        {/* <CodeBlock>
          <CopyBlockSections>
            <CopyBlock
              text={uniquelables}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
            <ResultText>
              <h6 className="result-text">
                Total number of Features resulted after One_Hot_Encoding_Top_X :
                7
              </h6>
            </ResultText>
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={uniquelables2}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={uniquelables3}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
            <ResultText>
              <h6>
                MAKE : 40 labels {"\n"}
                MODEL : 662 labels {"\n"}
                VEHICLECLASS : 17 labels {"\n"}
                TRANSMISSION : 23 labels {"\n"}
                FUELTYPE : 5 labels
              </h6>
            </ResultText>
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={uniquelables4}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={uniquelables5}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <ResultText>
            <h6>Total number of Features to be resulted after Standard One Hot Encoding :  744</h6>
          </ResultText>
        </CodeBlock> */}
      </Container>
    </div>
  );
}
const Container = styled.div`
  background-color: black;
  height: 100vh;
`;
const GraphBlock = styled.div`
  height: 60%;
  width: 60%;
  padding: 120px 20px 0 0px;

  @media (max-width: 998px){
    
  }
`;
// const CodeBlock = styled.div`
//   height: 100%;
//   width: 50%;
//   padding: 50px 20px 20px 20px;
//   justify-content: space-between;
// `;
// const CopyBlockSections = styled.div`
//   padding: 0 0 20px 0;
// `;
const Text = styled.div`
  // margin: 80px 0 0 0;
  background-color: black;
  text-align: right;
  height: 80px;
`;
// const ResultText = styled.h6`
//   padding: 10px 0 0px 20px;
//   width: 350px;
//   color: white;
// `;
export default Cuniquelabels;
