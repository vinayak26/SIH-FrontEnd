import React, { useState } from "react";
import "./Calculate.css";
import {
  companies,
  models,
  transmissions,
  vehicleclasses,
  fueltypes,
} from "../../utills/index";

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
    console.log(finalvalues);
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

  const [userresult, Setuserresult] = useState();
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
              {companies.map((company) => (
                <option value={company}>{company}</option>
              ))}
            </select>
          </div>
          <br></br>

          {/* MODEL*/}
          <div>
            <label htmlFor="Model">Model:</label>
            <select
              className="inputfield"
              name="Model"
              placeholder="Select Model..."
              onChange={handleOnModelchange}
            >
              <option value="">Model of your car...</option>
              {models.map((model) => (
                <option value={model}>{model}</option>
              ))}
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
              {vehicleclasses.map((vehicleclass) => (
                <option value={vehicleclass}>{vehicleclass}</option>
              ))}
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
              {transmissions.map((transmission) => (
                <option value={transmission}>{transmission}</option>
              ))}
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
              {fueltypes.map((fueltype) => (
                <option value={fueltype}>{fueltype}</option>
              ))}
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
        </div>
        <div className="output-fields">
          <textarea
            readOnly="readonly"           
            placeholder="OUTPUT"
            cols="15"
            rows="3"
            value={userresult}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
