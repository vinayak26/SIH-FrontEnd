import React from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
import "./Code.css"
export default function Code(props) {
  return (
    <div className="code-container">
      <CopyBlock
        text={props.text}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        theme={googlecode}
      />
      <h6 className="result-text">{props.resulttext}</h6>
    </div>
  );
}
