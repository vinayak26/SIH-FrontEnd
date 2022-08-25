import React from 'react'
import CardExampleCard from './card'
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import vansh from "./images/vansh.png"
import aveesh from "./images/avneesh.png"
import swapil from "./images/swapnil.png"
import vinyak from "./images/vinyak.jpeg"
import aditi from "./images/aditi.png"
import aarjav from "./images/aarajvj.png"
export default function AboutUs(props) 
{
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <>
    <div id={props.id || ""} style={{background: "#FDF4DC",fontFamily: "Rubik-semibold", 
      fontSize: "3rem",
      padding: "6rem 2rem",
      color: "#ffffff",
      textAlign: "center",
      width: "100%"}}>
    
    <h1>ABOUT US</h1>
    <div style={{display:"flex", gap: "10px", marginBottom: "8rem"}}>
    <CardExampleCard image={aditi}text=" Aditi Pundir" />
    <CardExampleCard image={vansh} text=" Vansh Rana"/>
    <CardExampleCard image={swapil} text=" Swapnil Sharma"/>
    </div><div style={{display:"flex", gap: "10px"}}>
    <CardExampleCard image={vinyak} text=" Vinayak Mishra"/>
    <CardExampleCard image={aarjav} text=" Aarjav Jain"/>
    <CardExampleCard image={aveesh}text=" Avneesh Sirohi"/>
    </div>
    </div>
  </>
  )
}

