import React from "react";
import Header from "./Header/Header";
import Middle from "./Middle/Middle";
import "./Home.css"

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header/>
      <Middle/>
    </div>
  );
}
