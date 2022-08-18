import './App.css';
import Home from './Container/Home/Home';
import Calculate from './Container/Calculate/Calculate';
import AboutUs from './Container/AboutUs/AboutUs';
import ExcelView from './Container/ExcelView/ExcelView';
import DataVisualRender from './Container/DataVisual/DataVisualRender';

function App() {
  return (
    <div className="App">
      <Home/>
      <Calculate/>
      <AboutUs/>
      <ExcelView/>
      <DataVisualRender/>
    </div>
  );
}

export default App;
