import React, { Component } from "react";
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

class Calculate extends Component {
  constructor(props) {
    super(props);
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== this.props.id) return;
      Animations.animations.fadeInScreen(this.props.id);
    };
  
     const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
      predictionResult: [],
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
        // console.log(response)
        this.setState({
          result: response.result,
          isLoading: false,
          predictionResult: this.state.predictionResult.concat(response.result)
          
        });
      });
      
      if(this.state.predictionResult.length > 6)  this.setState({predictionResult: this.state.predictionResult.slice(1)})
    console.log(this.state.predictionResult)
  };

  handleCancelClick = (event) => {
    // if(this.state.predictionResult.length > 6)  this.setState({predictionResult: this.state.predictionResult.slice(1)})
    // console.log(this.state.predictionResult)
    this.setState({predictionResult: []})
    console.log(this.state.predictionResult)
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
    for (var j = 0; j < models.length; j++) {
      MODELS.push(
        <option key={models[j]} value={models[j]}>
          {models[j]}
        </option>
      );
    }

    var VEHICLECLASSES = [];
    for (var k = 0; k < vehicleclasses.length; k++) {
      VEHICLECLASSES.push(
        <option key={vehicleclasses[k]} value={vehicleclasses[k]}>
          {vehicleclasses[k]}
        </option>
      );
    }

    var TRANSMISSIONS = [];
    for (var l = 0; l < transmissions.length; l++) {
      TRANSMISSIONS.push(
        <option key={transmissions[l]} value={transmissions[l]}>
          {transmissions[l]}
        </option>
      );
    }

    var FUELTYPES = [];
    for (var m = 0; m < fueltypes.length; m++) {
      FUELTYPES.push(
        <option key={fueltypes[m]} value={fueltypes[m]}>
          {fueltypes[m]}
        </option>
      );
    }

    return (
      <div className="Calculate-Container" id={this.props.id || ""}>
        <div className="calculate-title">
          <h1>CARBON FOOTPRINT CALCULATOR</h1>
        </div>
        <div className="input-container">
          <div className="input-container-row-1">
          <div>
              <label className="lable-text">COMPANY:</label>
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
                  className="inputbox"
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
                className="inputbox"
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
              {isLoading ? "Making prediction" : "Predict Result"}
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
              <h5 className="result-text">CO2 Emitted: {result} gm/km</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
