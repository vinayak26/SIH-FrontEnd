import React, { Component } from "react";
import "./Calculate.css";
import {
  companies,
  models,
  transmissions,
  vehicleclasses,
  fueltypes,
} from "../../utills/index";

class Apptest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        // sepalWidth: 200,
        company: "",
        model: "",
        vehicleclass: "",
        enginesize: 0,
        transmission: "",
        fueltype: "",
        mileage: 0,
      },
      result: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData,
    });
  };

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
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
        this.setState({
          result: response.result,
          isLoading: false,
        });
      });
  };

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    var COMPANIES = [];
    for (var i = 0; i < companies.length; i++) {
      COMPANIES.push(
        <option key={companies[i]} value={companies[i]}>
          {companies[i]}
        </option>
      );
    }

    var MODELS = [];
    for (var i = 0; i < models.length; i++) {
      MODELS.push(
        <option key={models[i]} value={models[i]}>
          {models[i]}
        </option>
      );
    }

    var VEHICLECLASSES = [];
    for (var i = 0; i < vehicleclasses.length; i++) {
      VEHICLECLASSES.push(
        <option key={vehicleclasses[i]} value={vehicleclasses[i]}>
          {vehicleclasses[i]}
        </option>
      );
    }

    var TRANSMISSIONS = [];
    for (var i = 0; i < transmissions.length; i++) {
      TRANSMISSIONS.push(
        <option key={transmissions[i]} value={transmissions[i]}>
          {transmissions[i]}
        </option>
      );
    }

    var FUELTYPES = [];
    for (var i = 0; i < fueltypes.length; i++) {
      FUELTYPES.push(
        <option key={fueltypes[i]} value={fueltypes[i]}>
          {fueltypes[i]}
        </option>
      );
    }

    return (
      <div className="Calculate-Container">
        <div className="calculate-title">
          <h1>CARBON FOOTPRINT CALCULATOR</h1>
        </div>
        <div className="input-container">
          <div className="input-container-row-1">
          <div>
              <label>COMPANY:</label>
              <select
                className="inputfield"
                value={formData.company}
                name="company"
                placeholder="Select Model..."
                onChange={this.handleChange}
              >
                {COMPANIES}
              </select>
            </div>
            <br></br>
            <div>
              <label>MODEL:</label>
              <select
                className="inputfield"
                value={formData.model}
                name="model"
                placeholder="Select Model..."
                onChange={this.handleChange}
              >
                {MODELS}
              </select>
            </div>
            <br></br>
            <div>
              <label>VEHICLE CLASS:</label>
              <select
                className="inputfield"
                value={formData.vehicleclass}
                name="vehicleclass"
                placeholder="Select Vehicle Class"
                onChange={this.handleChange}
              >
                {VEHICLECLASSES}
              </select>
            </div>
            <br></br>
            <div>
              <label className="inputfield">
                Enter Engine Size:
                <input
                  type="text"
                  name="enginesize"
                  value={formData.enginesize}
                  onChange={this.handleChange}
                  placeholder="Engine size of your car"
                ></input>
              </label>
            </div>
          </div>
          <div className="input-container-row-2">
            <div>
              <label>Transmission:</label>
              <select
                className="inputfield"
                value={formData.transmission}
                name="transmission"
                placeholder="Select Transmission"
                onChange={this.handleChange}
              >
                {TRANSMISSIONS}
              </select>
            </div>
            <br></br>
            <div>
              <label>Fuel Type:</label>
              <select
                className="inputfield"
                value={formData.fueltype}
                name="fueltype"
                placeholder="Select Fueltypes"
                onChange={this.handleChange}
              >
                {FUELTYPES}
              </select>
            </div>
            <br></br>
            <div>
              <label className="inputfield">
                Enter mileage:
                <input
                  type="text"
                  name="mileage"
                  value={formData.mileage}
                  onChange={this.handleChange}
                  placeholder="Engine Mileage of your car"
                ></input>
              </label>
            </div>
          </div>
          <div className="submit-fields">
            <button
              className="btn-global"
              disabled={isLoading}
              onClick={!isLoading ? this.handlePredictClick : null}
            >
              {isLoading ? "Making prediction" : "Predict"}
            </button>

            <button
              className="btn-global"
              disabled={isLoading}
              onClick={this.handleCancelClick}
            >
              Reset Prediction
            </button>
          </div>
          <div className="output-fields">
            {result === "" ? null : (
              <h5>{result}</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Apptest;
