import React from 'react'
import "./Middle.css"
import TypeAnimation from "react-type-animation";

export default function Middle() {
  return (
    <div className="HomeContainer">
      <div className="Title-Container">
        <div className="Title">
          <h1 className="Title-logo">
            <span className="smart">SMART</span>
            <span className="india"> INDIA </span><span className="hack">HACKATHON</span>
            <span className="year"> 2022</span>
          </h1>
        </div>
        <div className="Project-logo">
          <h1 className="crb-logo">
            <TypeAnimation
            className="crb-logo"
              sequence={["CARBON FOOTPRINT EMISSION CALCULATOR", 6000, ""]}
              speed={45}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="text-container">
          <h4>
            <p>A Carbon Footprint is a Total Amount of Green House</p>
            <p>Gases(Including Carbon dioxide and Methane)</p>
            <p>That are Generated By our Actions.</p>
          </h4>
        </div>
        <div className="action-buttons-1">
            <button className="btn-global">Button 1</button>
            <button className="btn-global">Button 2</button>
            <button className="btn-global">Button 3</button>
        </div>
        <div className="action-buttons-2">
        <button className="btn-global">Button 4</button>
        <button className="btn-global">Button 5</button>
        </div>
      </div>
    </div>
  )
}
