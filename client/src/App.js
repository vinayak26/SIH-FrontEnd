import './App.css';
import Home from './Container/Home/Home';
import Calculate from './Container/Calculate/Calculate';
import AboutUs from './Container/AboutUs/AboutUs';
import DataVisualRender from './Container/DataVisual/DataVisualRender';


function App() {
  return (
    <div className="App">
      <Home/>
      <Calculate/>
      <AboutUs/>
      <DataVisualRender/>
    </div>
  );
}

export default App;
