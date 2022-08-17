import React from "react";
import Code from "../DataVisual/Code/Code";
import Graph from "../DataVisual/Graph/Graph";
import styled from "styled-components";

export default function DataVisual(props) {
  const defaultstyle = props.defaultstyle;

  if (defaultstyle) {
    return (
      <Container bgColor={props.backgroundcolor}>
        <Text>
          <h1>{props.title}</h1>
        </Text>
        <Wrap>
          <Code
            text={props.code}
            language={"python"}
            showLineNumbers={`true`}
            resulttext={props.resulttext}
          />
          <Graph value={props.graphyvalues} />
        </Wrap>
      </Container>
    );
  }
  return (
    <Container bgColor={props.backgroundcolor}>
      <Text>
        <h1>{props.title}</h1>
      </Text>
      <Wrap>
        <Graph value={props.graphyvalues} />
        <Code text={props.code} language={"python"} showLineNumbers={`true`} resulttext={props.resulttext}/>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => `${props.bgColor}`};
`;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  padding: 40px 0 0 0;
`;
