import React from 'react'
// import { CopyBlock, googlecode } from "react-code-blocks";
// import Chart from "react-apexcharts";
// import { handelingoutliners,removingoutliners } from "../../utilities/codes";
import styled from "styled-components";

function Houtliners() {
  return (
    <div>        
      <Text>
    <h1>Handling Outliers</h1>
  </Text> 
<Container>
{/* <GraphBlock>
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
  </CodeBlock> */}

</Container></div>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #030f18;
  height:100vh;
`;

// const CodeBlock = styled.div`
//   width: 50%;
//   padding: 150px 20px 20px 20px;
// `;

const Text = styled.div`

  padding: 80px 0 0 0;
  background-color: black;
  text-align:right;
  height:80px;
`;

// const ResultText = styled.div`
//   padding: 10px 0 0px 20px;
//   width: 200px;
//   color: white;
// `;

// const GraphBlock = styled.div`
//   width: 50%;
//   margin: 150px 20px 20px 20px;
// `;

export default Houtliners