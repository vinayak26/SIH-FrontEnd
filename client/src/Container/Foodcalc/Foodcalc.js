//import React, { Component } from 'react';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {breads} from "./Fooddata"


function Foodcalc(){

const handleonclick = () => {
let finalvalues = [
    bread
]
console.log(finalvalues)

}

// Hooks for food

const handleonBreadchange = (event) => {
    Setbread(event.target.value);  
}

const[bread,Setbread] = useState();


return(
    <>
    <h1 align = "center">Food Carbon Footprint Calculator</h1>
    <div align = "center">
        <label>Bread</label>
        <select              
            onChange={handleonBreadchange}
            placeholder='Select Bread ..'
        >
            <option value="">Select Bread Category</option>
            {breads.map((bread) =>(
                <option value={bread}>{bread}</option>
            ))}
        </select>
        <div className=''>
            <button onClick={handleonclick}>Submit</button>
        </div>
    </div>
    </>
);
}
export default Foodcalc;