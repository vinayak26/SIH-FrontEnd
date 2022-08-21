import React from "react";
// import { CopyBlock, googlecode } from "react-code-blocks";
import Chart from "react-apexcharts";
// import {
//   hotencoding,
//   hotencoding2,
//   hotencoding3,
//   hotencoding4,
// } from "../../utilities/codes";
import styled from "styled-components";

function Photencoding() {
  return (
    <div>
      <Text>
        <h1>
          Performing One-Hot-encoding-TOP-X for Lable Encoding & Dimensionality Reduction
        </h1>
      </Text>
      <Container>
        <GraphBlock>
          <Chart
            type="bar"
            series={[
              {
                data: [35, 10, 15, 5, 5],
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
            }}
          />
        </GraphBlock>
        {/* <CodeBlock>
          <CopyBlockSections>
            <CopyBlock
              text={hotencoding}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={hotencoding2}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <CopyBlockSections>
            <CopyBlock
              text={hotencoding3}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
          <ResultText>
            <h6>Total number of Features resulted after One_Hot_Encoding_Top_X :  72</h6>
          </ResultText>
          <CopyBlockSections>
            <CopyBlock
              text={hotencoding4}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
          </CopyBlockSections>
        </CodeBlock> */}
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 980px;
  background-color: black;
  width:100%;
`;
const GraphBlock = styled.div`
  height: 60%;
  width: 60%;
  margin: 100px 0px 0 550px;

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
  padding: 80px 0 0 0;
  background-color: black;
  text-align: right;
  height: 80px;
`;
// const ResultText = styled.h6`
//   padding: 10px 0 0px 20px;
//   width: 350px;
//   color: white;
// `;


export default Photencoding;
