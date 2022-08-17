import React from "react";
import Code from "../DataVisual/Code/Code";
import Graph from "../DataVisual/Graph/Graph";
import styled from "styled-components"

export default function DataVisual(props) 

{
  return (
    <div className="data-visual-container">
      <Wrap bgColor={props.backgroundcolor}>
      <Code
        text={props.code}
        language={"python"}
        showLineNumbers={`true`}
      />
      <Graph
      value={props.graphyvalues}
      />
      </Wrap>
    </div>
  );
}

const Wrap =styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props=>`${props.bgColor}`};
  display: flex;
  flex-direction: row;

`