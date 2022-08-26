//import React, { Component } from 'react';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
//import ScrollService from "../../utilities/ScrollService";


function Foodcalc(){
    const[amount, setAmount] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        var formData = this.state.formData;
        formData[name] = value;
        this.setState({
          formData,
        });
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`The amount you entered was: ${amount}`);
    }
    
    return(
        <>
        <h1 align = "center">Food Carbon Footprint Calculator</h1>
        <div align = "center">
            <label>Bread</label>
            <select
                placeholder="Select Bread..."
                onChange={handleChange}
            >
            {
                [<option value={"Chapati"}>
                Chapati
                </option>,
                <option value={"Bread"}>
                Bread
                </option>,
                <option value={"Paratha"}>
                Paratha
                </option>]
            }

            </select>
            <form onSubmit={handleSubmit}>
                <label>Enter Amount Consumed :
                    <input
                    type="text"
                    value={amount}
                    />
                    <input type="submit"/>
                </label>
            </form>
        </div>
        </>
    );
}
export default Foodcalc;