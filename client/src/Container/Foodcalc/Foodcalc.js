//import React, { Component } from 'react';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {breads,dairies,vegetables,fruits,non_Veg_Products,breadsJSON,dairiesJSON,vegetablesJSON,fruitsJSON,non_Veg_ProductsJSON} from "./Fooddata"


function Foodcalc(){

const handleonclick = () => {
let finalvalues = [bread,dairy,vegetable,fruit,non_Veg_Product]
console.log(finalvalues)

}

// Hooks for food

const handleonbreadchange = (event) => {
    SetBread(event.target.value);  
}

const[bread,SetBread] = useState();

const handleondairychange = (event) => {
    SetDairy(event.target.value);  
}

const[dairy,SetDairy] = useState();

const handleonvegetablechange = (event) => {
    Setvegetable(event.target.value);  
}

const[vegetable,Setvegetable] = useState();

const handleonfruitchange = (event) => {
    Setfruit(event.target.value);  
}

const[fruit,Setfruit] = useState();

const handleonnon_Veg_Productchange = (event) => {
    Setnon_Veg_Product(event.target.value);  
}

const[non_Veg_Product,Setnon_Veg_Product] = useState();


return(
    <>
    <h1 align = "center">Food Carbon Footprint Calculator</h1>
    <div align = "center">
        <label>Bread</label>
        <select              
            onChange={handleonbreadchange}
            placeholder='Select Bread ..'
        >
            <option value="">Select Bread Category</option>
            {breads.map((bread) =>(
                <option value={breadsJSON[bread]}>{bread}</option>
            ))}
        </select>
        <div className=''>
            <button onClick={handleonclick}>Submit</button>
        </div>
    </div>
    <div align = "center">
        <label>Dairy</label>
        <select              
            onChange={handleondairychange}
            placeholder='Select dairy ..'
        >
            <option value="">Select dairy Category</option>
            {dairies.map((dairy) =>(
                <option value={dairiesJSON[dairy]}>{dairy}</option>
            ))}
        </select>
        <div className=''>
            <button onClick={handleonclick}>Submit</button>
        </div>
    </div>
    <div align = "center">
        <label>Vegetables</label>
        <select              
            onChange={handleonvegetablechange}
            placeholder='Select vegetable ..'
        >
            <option value="">Select vegetable Category</option>
            {vegetables.map((vegetable) =>(
                <option value={vegetablesJSON[vegetable]}>{vegetable}</option>
            ))}
        </select>
        <div className=''>
            <button onClick={handleonclick}>Submit</button>
        </div>
    </div>
    <div align = "center">
        <label>Fruits</label>
        <select              
            onChange={handleonfruitchange}
            placeholder='Select fruit..'
        >
            <option value="">Select fruit Category</option>
            {fruits.map((fruit) =>(
                <option value={fruitsJSON[fruit]}>{fruit}</option>
            ))}
        </select>
        <div className=''>
            <button onClick={handleonclick}>Submit</button>
        </div>
    </div>
    <div align = "center">
        <label>Non Veg Product</label>
        <select              
            onChange={handleonnon_Veg_Productchange}
            placeholder='Select non_Veg_Product ..'
        >
            <option value="">Select non_Veg_Product Category</option>
            {non_Veg_Products.map((non_Veg_Product) =>(
                <option value={non_Veg_ProductsJSON[non_Veg_Product]}>{non_Veg_Product}</option>
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