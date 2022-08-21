import React from "react";
// import { CopyBlock, googlecode } from "react-code-blocks";
// import {
//   findingcorrelation,
//   findingcorrelation2,
//   findingcorrelation3,
//   findingcorrelation4,
//   findingcorrelation5,
//   findingcorrelation6,
//   findingcorrelation7
// } from "../../utilities/codes";
import styled from "styled-components";

function Fcorreraltion() {
  return (
    <div>
      <Text>
        <h1>Finding Correlation Among Features(Pearson Correlation)</h1>
      </Text>
      <Container>
        {/* <CodeBlock>
          <div className="code-container">
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation2}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation3}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation6}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation4}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
            <ResultText>
        <h6 className="result-text">{findingcorrelation7}</h6>
      </ResultText>
            <CopyBlockSections>
              <CopyBlock
                text={findingcorrelation5}
                language="python"
                showLineNumbers="true"
                theme={googlecode}
              />
            </CopyBlockSections>
          </div>
        </CodeBlock>
        <GraphBlock src="graph.jpeg" alt="unable to load">
        </GraphBlock> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 100vh;
`;
// const CodeBlock = styled.div`
//   height: 100%;
//   width: 50%;
//   padding: 50px 20px 20px 20px;
//   justify-content: space-between;
// `;

const Text = styled.div`
  padding: 50px 0 0 0;
  background-color: black;
  height: 80px;
`;

// const ResultText = styled.div`
//   padding: 10px 0 20px 20px;
//   width: 200px;
//   color: white;
// `;

// const GraphBlock = styled.img`
//   object-fit: contain;
//   height: 60%;
//   width: 60%;
//   margin: 100px 20px 0 0px;
// `;

// const CopyBlockSections = styled.div`
//   padding: 0 0 20px 0;
// `;

export default Fcorreraltion;
