import React from 'react'
import CardExampleCard from './card'
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
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
    <div id={props.id || ""}>
    <div style={{display:"flex", gap: "10px", marginBottom: "10rem"}}>
    <CardExampleCard image={"./../vinyak.jpg"} />
    <CardExampleCard image={"./..avesh.jpeg"} />
    <CardExampleCard image={"././images/aarjav.jpg"}/>
    </div><div style={{display:"flex", gap: "5px"}}>
    <CardExampleCard image={"./../aarjav.png" } text=" aarjav jain"/>
    <CardExampleCard image={"./../image.png"}/>
    <CardExampleCard image={"./../image.png"}/>
    </div>
    </div>
  </>
  )
}

