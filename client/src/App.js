import './App.css';
import Home from './Container/Home/Home';
import Calculate from './Container/Calculate/Calculate';
import AboutUs from './Container/AboutUs/AboutUs';
import DataVisual from './Container/DataVisual/DataVisual';

function App() {
  return (
    <div className="App">
      <Home/>
      <Calculate/>
      <AboutUs/>
      <DataVisual
      text={`#Finding IQR
Q1 = dataset.iloc[:, -1].quantile(0.25)
Q3 = dataset.iloc[:, -1].quantile(0.75)
IQR = Q3 - Q1
LB = Q1 - 1.5*IQR
UB = Q3 + 1.5*IQR
print(f'Range = ({LB}, {UB})
        `}
        language={"python"}
      />
    </div>
  );
}

export default App;
