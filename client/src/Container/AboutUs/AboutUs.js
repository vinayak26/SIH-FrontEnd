import React from "react";
import "./AboutUs.css";
import pic from "../../img/pic.jpg"

export default function AboutUs() {
  return (
    <div>
        <div className="about-us">
          <h1 className="container">ABOUT US</h1>
            <div className="aboutus-container">
                <div className="aboutus-details">
                    <div className="profile-container">
                      <img className="pic" src={pic}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
