import React, { Component, useState } from "react";
import "./Calculate.css";
import {
  companies,
  models,
  transmissions,
  vehicleclasses,
  fueltypes,
} from "../../utilities/index";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
function Calculate() {
  const [isLoading, setloading] = useState(false)
  const [formData, setformdata] = useState({
  Make: "", 
  Model: "", 
  Class: "", 
  Engine_Size: 0,
  Transmission: "",
  Fuel_Type: "",
  Mileage_KmpL: 0})

  const [result, setresult] = useState("")
  const [predictionResult, setarray] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformdata(prevState => ({
      ...prevState,
      [name]: value
    }));
    // setformdata(prevFormData => prevFormData.name = event.target.value)
  };

const handlePredictClick = (event) => {
  setloading(prevLoad => ({ ...prevLoad, isloading: true }))
    fetch("http://127.0.0.1:5000/prediction/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        setarray(current => [...current, response.result])
        if (predictionResult.length > 6) setarray([])
        setresult(response.result)
        setloading(false)
        // console.log(predictionResult)
      });
  };

  const handleCancelClick = (event) => {
    setresult("")
  };

  return (
    <div className="Calculate-Container">
      <div className="calculate-title">
        <h1>CARBON FOOTPRINT CALCULATOR</h1>
      </div>
      <div className="input-container">
        <div className="input-container-row-1">
          {/* COMPANY */}
          <div>
            <label htmlFor="Make">Company:</label>
            <select
              className="inputfield"
              name="Make"
              placeholder="Select Company..."
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            <label className="inputfield" htmlFor="Engine_Size">
              Enter Engine Size:
              <input
                name="Engine_Size"
                onChange={handleChange}
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
              onChange={handleChange}
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
            <label htmlFor="Fuel_Type">Fuel Type:</label>
            <select
              className="inputfield"
              name="Fuel_Type"
              placeholder="Select Fuel Type of your car..."
              onChange={handleChange}
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
            <label className="inputfield" htmlFor="Mileage_KmpL">
              Mileage in Km/L:
            </label>
            <input
              onChange={handleChange}
              name="Mileage_KmpL"
              type="text"
              placeholder="Average kilometers per litres)..."
            ></input>
          </div>
        </div>
        {/* FINAL SUBMIT BUTTON  */}

        <div className="submit-fields">
          <button
            className="btn-global"
            disabled={isLoading}
            onClick={!isLoading ? handlePredictClick : null}
          >
          {isLoading ? "Making prediction" : "Predict Result"}
          </button>

          <button
            className="btn-global"
            disabled={isLoading}
            onClick={handleCancelClick}
          >
            Reset Prediction
          </button>
        </div>
        <div className="output-fields">
          {result === "" ? null : (
            // console.log(result)
            <h5 className="result-text">{result-200}</h5>
          )}
        </div>

      </div>
    </div>
  );
}

export default Calculate;
