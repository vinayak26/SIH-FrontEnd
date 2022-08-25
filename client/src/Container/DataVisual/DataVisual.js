import React from 'react'
// import Doutliners from "./Doutliners"
// import Houtliners from "./Houtliners"
// import Fcorreraltion from "./Fcorreraltion"
import Cuniquelabels from "./Cuniquelabels"
import Photencoding from './Photencoding'
import MLcomp from './MLcomp';
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function DataVisual(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div id={props.id || ""}>
        {/* <Doutliners/>
        <Houtliners/>
        <Fcorreraltion/> */}
        {/* <Cuniquelabels/>
        <Photencoding/> */}
        <MLcomp/>
    </div>
  )
}
