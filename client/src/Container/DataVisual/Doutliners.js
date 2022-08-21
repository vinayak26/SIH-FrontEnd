import React from "react";
// import { CopyBlock, googlecode } from "react-code-blocks";
// import Chart from "react-apexcharts";
// import { detectingoutliners } from "../../utilities/codes";
import styled from "styled-components";

function Doutliners() {
  return (
    <div>
        <Text>
          <h1>Detecting Outliers(Using BoxPlot)</h1>
        </Text> 
      <Container>       
        {/* <CodeBlock>
          <div className="code-container">
            <CopyBlock
              text={detectingoutliners}
              language="python"
              showLineNumbers="true"
              theme={googlecode}
            />
            <ResultText>
              <h6 className="result-text">"Range = (76.5, 424.5)"</h6>
            </ResultText>
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
        </GraphBlock> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height:100vh;
`;

// const CodeBlock = styled.div`
//   width: 50%;
//   padding: 250px 20px 20px 20px;
// `;

const Text = styled.div`
  padding: 50px 0 0 0;
  background-color: black;
  height:80px
`;

// const ResultText = styled.div`
//   padding: 10px 0 20px 20px;
//   width: 200px;
//   color: white;
// `;

// const GraphBlock = styled.div`
//   width: 50%;
//   margin: 180px 20px 20px 20px;
// `;

export default Doutliners;
