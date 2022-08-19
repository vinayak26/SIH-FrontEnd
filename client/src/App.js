import './App.css';
import Home from './Container/Home/Home';
// import Calculate from './Container/Calculate/Calculate';
import Apptest from './Container/Calculate/Apptest';
import AboutUs from './Container/AboutUs/AboutUs';
import ExcelView from './Container/ExcelView/ExcelView';
import Doutliners from './Container/DataVisual/Doutliners';
import Houtliners from './Container/DataVisual/Houtliners';
import Fcorreraltion from './Container/DataVisual/Fcorreraltion';
import Cuniquelabels from './Container/DataVisual/Cuniquelabels';
import Photencoding from './Container/DataVisual/Photencoding';


function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Calculate/> */}
      <Apptest/>
      <AboutUs/>
      <ExcelView/>
      <Doutliners/>
      <Houtliners/>
      <Fcorreraltion/>
      <Cuniquelabels/>
      <Photencoding/>
      <ExcelView/>
    </div>
  );
}

export default App;
