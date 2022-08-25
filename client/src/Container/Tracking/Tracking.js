import React, { Component } from "react";
import "./Tracking.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

class Tracking extends Component {
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
        currentlocation: "",
        targetlocation: "",
      }, 
      result_track_track: "",
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
    fetch("http://127.0.0.1:5002/distance/", {
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
          result_track: response.result_track,
          isLoading: false,
        });
      });
  };

  handleCancelClick = (event) => {
    this.setState({ result_track: "" });
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result_track = this.state.result_track;

    return (
      <div className="Tracking-Container" id={this.props.id || ""}>
        <div className="tracking-title">
          <h1>CARBON Emission Tracking</h1>
        </div>
        <div className="input-container">
          <div className="input-container-row-1">
            <div>
              <label className="inputfield">
                Current Location:
                <input
                  className="inputbox"
                  type="text"
                  name="currentlocation"
                  value={formData.currentlocation}
                  onChange={this.handleChange}
                  placeholder="Enter Current Location"
                ></input>
              </label>
            </div>
          </div>
          <div className="input-container-row-2">
            <div>
              <label className="inputfield">
                Target Location:
                <input
                className="inputbox"
                  type="text"
                  name="targetlocation"
                  value={formData.targetlocation}
                  onChange={this.handleChange}
                  placeholder="Enter Target Location"
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
              {isLoading ? "Making prediction" : "Predict result_track"}
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
            {result_track === "" ? null : (
              <h5 className="result_track-text">{result_track}</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Tracking;
