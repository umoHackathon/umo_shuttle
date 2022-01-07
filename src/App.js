import Cities from "./Cities";
import Hotels from "./Hotels";
import { useState, useEffect, useRef } from "react";

function App() {
    const [value, setValue] = useState("");
   
    const handleSelect = (e) => {
      setValue(e);
    }

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   const shuttles = {shuttles};
    // }

  return (
  <div align="center">
    <h1>Umo Shuttle</h1>

    <div><img src="./img/Umo_Shuttle_Header.png" alt="Umo Shuttle"/></div>
    <div><img src="./img/Mapsicle_Map.png" alt="Display Map here.."/></div>
      <div>
        
        <label htmlFor="city">City: </label>
          <select name="city" id="city" className="input-button" onChange={handleSelect}>
            <option value="" selected>Select</option>
            <option value="chicago">Chicago</option>
            <option value="san francisco">San Francisco</option>
            <option value="san diego">San Diego</option>
            <option value="new york">New York</option>
          </select>
          
          <Hotels text={document.getElementById("city")?.value}/>
          
      </div>
  </div>
  );
}


export default App;
