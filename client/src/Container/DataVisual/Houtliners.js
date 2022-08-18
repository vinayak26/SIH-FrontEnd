import React from 'react'
import { CopyBlock, googlecode } from "react-code-blocks";
import Chart from "react-apexcharts";
import { handelingoutliners,removingoutliners } from "../../utills/codes";
import styled from "styled-components";

function Houtliners() {
  return (
    <div>        <Text>
    <h1>Handling Outliners</h1>
  </Text> 
<Container>       
  <CodeBlock>
    <div className="code-container">
      <CopyBlock
        text={handelingoutliners}
        language="python"
        showLineNumbers="true"
        theme={googlecode}
      />
      <ResultText>
        <h6 className="result-text">Number of outliers = 6 {"\n"}
        Total number of requireed rows = 1062</h6>
      </ResultText>
      <CopyBlock
        text={removingoutliners}
        language="python"
        showLineNumbers="true"
        theme={googlecode}
      />
    </div>
  </CodeBlock>
  <GraphBlock>
    <Chart
      type="boxPlot"
      series={[
        {
          data: [
            {
              x: ["C02-EMISSION"],
              y: [54, 66, 69, 75, 88],
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
            show: false,
          },
        },
        theme: {
          mode: "dark",
        },
        legend: {
          show: true,
        },
        stroke: {
          show: true,
          lineCap: "butt",
          width: 2,
          colors: ["#C4C4C4"],
        },
        colors: ["#FF4A4A", "#FEB019"],
      }}
    />
  </GraphBlock>
</Container></div>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height:100vh;
`;

const CodeBlock = styled.div`
  width: 50%;
  padding: 100px 20px 20px 20px;
`;

const Text = styled.div`

  padding: 50px 0 0 0;
  background-color: black;
  text-align:right;
  height:80px;
`;

const ResultText = styled.div`
  padding: 10px 0 0px 20px;
  width: 200px;
  color: white;
`;

const GraphBlock = styled.div`
  width: 50%;
  margin: 100px 20px 20px 20px;
`;

export default Houtliners