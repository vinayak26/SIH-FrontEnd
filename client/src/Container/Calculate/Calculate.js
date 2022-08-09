import React, {useState} from "react";
import "./Calculate.css";

export default function Calculate() {
  const handelcalculate = () => {
    Setresult(Number(firstinput) + Number(secondinput));
    // Setfirstinput(newtext)
  }


  const handleOnChange1 = (event) => {
    Setfirstinput(event.target.value);
}
  const handleOnChange2 = (event) => {
    Setsecondinput(event.target.value);
}
  








  const[result,Setresult] = useState()
  const [firstinput,Setfirstinput] = useState()
  const [secondinput,Setsecondinput] = useState()
  return (
    <div className="Calculate-Container">
      <div className="calculate-title">
        <h1>CARBON FOOTPRINT CALCULATOR</h1>
      </div>
      <div className="description-container">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          congue orci vel nisl aliquet, eu bibendum dui vehicula. Mauris at
          condimentum diam. Curabitur feugiat massa at leo congue molestie.
          Curabitur ultricies vestibulum semper. Pellentesque ac purus mauris.
          Aliquam erat volutpat. Aliquam a rutrum orci, eget placerat tortor.
        </p>
      </div>
      <div className="Input container">
        <label>
          <input
          value={firstinput}
          onChange={handleOnChange1}></input>
        </label>
        <label>
          <input
          value={secondinput}
          onChange={handleOnChange2}
          ></input>
        </label>
        <label>
          <input
          value={result}
          ></input>
        </label>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelcalculate}></button>
    </div>
  );
}
