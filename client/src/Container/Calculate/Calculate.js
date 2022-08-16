import React, { useState } from "react";
import "./Calculate.css";
import { companies, models} from "../../utills";
import DummyText from "./components/DummyText";

export default function Calculate() {
  const handleonclick = () => {
    let finalvalues = [
      company,
      model,
      vehicleclass,
      enginesize,
      transmission,
      fueltype,
      mileage,
    ];
    console.log(finalvalues)
    Setuserresult(finalvalues);
  };

  // HOOKS FOR COMPANY

  const handleOnCompanychange = (event) => {
    Setcompany(event.target.value);
  };

  // HOOKS FOR MODEL

  const handleOnModelchange = (event) => {
    Setmodel(event.target.value);
  };

  // HOOKS FOR ENGINE SIZE
  const handleOnEnginechange = (event) => {
    Setenginesize(event.target.value);
  };

  // HOOKS FOR VEHICLE CLASS
  const handleOnVechicleclasschange = (event) => {
    Setvehicleclass(event.target.value);
  };

  // HOOKS FOR TRANSMISSION
  const handleOnTransmissionchange = (event) => {
    Settransmission(event.target.value);
  };

  // HOOKS FOR FUEL TYPE
  const handleOnFuelchange = (event) => {
    Setfueltype(event.target.value);
  };

  //HOOKS FOR MILEAGE
  const handleOnMileagechange = (event) => {
    Setmileage(event.target.value);
  };


  // Declared States for Hooks

  const[userresult,Setuserresult] = useState();
  const [mileage, Setmileage] = useState();
  const [fueltype, Setfueltype] = useState();
  const [transmission, Settransmission] = useState();
  const [vehicleclass, Setvehicleclass] = useState();
  const [model, Setmodel] = useState();
  const [enginesize, Setenginesize] = useState();
  const [company, Setcompany] = useState("");
  return (
    <div className="Calculate-Container">
      <div className="calculate-title">
        <h1>CARBON FOOTPRINT CALCULATOR</h1>
      </div>
      <div className="description-container">
         {<DummyText />}
      </div>
      <div className="input-container">
        <div className="input-container-row-1">
          {/* COMPANY */}
          <div>
            <label htmlFor="Company">Company:</label>
            <select
              className="inputfield"
              name="Company"
              placeholder="Select Company..."
              onChange={handleOnCompanychange}
            >
              <option value="">Company of your car...</option>
              {companies.map(company=> (<option value={company}>{company}</option>))}
            </select>
          </div>
          <br></br>

          {/* MODEL IK ITS BIG  */}
          <div>
            <label htmlFor="Model">Model:</label>
            <select
              className="inputfield"
              name="Model"
              placeholder="Select Model..."
              onChange={handleOnModelchange}
            >
              <option value="">Model of your car...</option>
              {models.map(model=>(<option value={model}>{model}</option>))}
              
            </select>
          </div>
          <br></br>

          {/* VEHICLE CALSS */}
          <div>
            <label htmlFor="Class">Class:</label>
            <select
              className="inputfield"
              name="Class"
              placeholder="Select Vehicle-Class..."
              onChange={handleOnVechicleclasschange}
            >
              <option value="">Vehicle-Class of your car...</option>
              <option value="MID-SIZE">MID-SIZE</option>
              <option value="COMPACT">COMPACT</option>
              <option value="SUV - SMALL">SUV - SMALL</option>
              <option value="SUV - STANDARD">SUV - STANDARD</option>
              <option value="FULL-SIZE">FULL-SIZE</option>
              <option value="TWO-SEATER">TWO-SEATER</option>
              <option value="SUBCOMPACT">SUBCOMPACT</option>
              <option value="PICKUP TRUCK - STANDARD">
                PICKUP TRUCK - STANDARD
              </option>
              <option value="MINICOMPACT">MINICOMPACT</option>
              <option value="STATION WAGON - SMALL">
                STATION WAGON - SMALL
              </option>
              <option value="VAN - PASSENGER">VAN - PASSENGER</option>
              <option value="VAN - CARGO">VAN - CARGO</option>
              <option value="MINIVAN">MINIVAN</option>
              <option value="PICKUP TRUCK - SMALL">PICKUP TRUCK - SMALL</option>
              <option value="SPECIAL PURPOSE VEHICLE">
                SPECIAL PURPOSE VEHICLE
              </option>
              <option value="STATION WAGON - MID-SIZE">
                STATION WAGON - MID-SIZE
              </option>
            </select>
          </div>
          <br></br>

          {/* ENGINE SIZE */}
          <div>
            <label className="inputfield" htmlFor="Engine-size">
              Enter Engine Size:
              <input
                onChange={handleOnEnginechange}
                placeholder="Engine size of your car"
              ></input>
            </label>
          </div>
        </div>

        <br></br>
        <div className="input-container-row-2">
          {/* TRANSMISSION */}
          <div>
            <label htmlFor="Transmission">Transmission:</label>
            <select
              className="inputfield"
              name="Transmission"
              placeholder="Select Transmission of your car..."
              onChange={handleOnTransmissionchange}
            >
              <option value="">Transmission of your car...</option>
              <option value="A6">A6</option>
              <option value="AS6">AS6</option>
              <option value="M6">M6</option>
              <option value="A8">A8</option>
              <option value="AS8">AS8</option>
              <option value="AS7">AS7</option>
              <option value="M5">M5</option>
              <option value="AV">AV</option>
              <option value="A4">A4</option>
              <option value="AM7">AM7</option>
              <option value="A5">A5</option>
              <option value="A7">A7</option>
              <option value="AV6">AV6</option>
              <option value="AS5">AS5</option>
              <option value="M7">M7</option>
              <option value="A9">A9</option>
              <option value="AM6">AM6</option>
              <option value="AV7">AV7</option>
              <option value="AV8">AV8</option>
              <option value="AS9">AS9</option>
              <option value="AM5">AM5</option>
              <option value="AS4">AS4</option>
              <option value="Other">Other/Don't Know</option>
            </select>
          </div>
          <br></br>
          {/* FUEL TYPE */}
          <div>
            <label htmlFor="Fuel Type">Fuel Type:</label>
            <select
              className="inputfield"
              name="Fuel_Type"
              placeholder="Select Fuel Type of your car..."
              onChange={handleOnFuelchange}
            >
              <option value="">Fuel Type of your car...</option>
              <option value="X">X</option>
              <option value="Z">Z</option>
              <option value="E">E</option>
              <option value="D">D</option>
              <option value="Unknown">.Don't know</option>
            </select>
          </div>
          <br></br>

          {/* MILEAGE */}
          <div>
            <label className="inputfield" htmlFor="Mileage in Km/L">
              Mileage in Km/L:
            </label>
            <input
              onChange={handleOnMileagechange}
              name="Mileage in Km/L:"
              type="text"
              placeholder="Average kilometers per litres)..."
            ></input>
          </div>
        </div>
        {/* FINAL SUBMIT BUTTON  */}
        <div className="submit-fields">
          <button className="btn-global" onClick={handleonclick}>
            SUBMIT
          </button>
          <textarea
          placeholder="OUTPUT" cols="15" rows="3"
          value={userresult}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
