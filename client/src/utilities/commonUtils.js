import Home from "../Container/Home/Home";
import Calculate from "../Container/Calculate/Calculate";
// import Tracking from "../Container/Tracking/Tracking";
import DataVisual from "../Container/DataVisual/DataVisual";
// import AboutUs from "../Container/AboutUs/AboutUs";


export const TOTAL_SCREENS = [
    {
      screen_name: "Home",
      component: Home,  
    },
    {
      screen_name: "Calculate",
      component: Calculate,  
    },
    // {
    //   screen_name: "Tracking",
    //   component: Tracking,  
    // },
    {
      screen_name: "DataVisual",
      component: DataVisual,  
    },
    
    // {  screen_name: "AboutUs",
    //   component: AboutUs,  
    // },
];
export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
  };
