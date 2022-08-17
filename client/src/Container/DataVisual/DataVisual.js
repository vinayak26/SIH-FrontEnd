import React from "react";
import Code from "../DataVisual/Code/Code";
import Graph from "../DataVisual/Graph/Graph";
import "./DataVisual.css";

export default function DataVisual(props) {
  return (
    <div className="data-visual-container">
      <Code
        text={props.text}
        language={props.language}
        showLineNumbers={`true`}
      />
      <Graph
      value={[54, 66, 69, 75, 88]}
      />
    </div>
  );
}
