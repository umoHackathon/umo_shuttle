import Cities from "./Cities";
import Hotels from "./Hotels";
import { useState, useEffect, useRef } from "react";

function App() {
    const [value, setValue] = useState("");
   
    const handleSelect = (e) => {
      console.log(e);
      setValue(e);
      alert(document.getElementById("city").value);
    }

  return (
  <div align="center">
    <h1>Umo Shuttle</h1>

    <div><img src="/img/Umo_Shuttle_Header.png" alt="Umo Shuttle"/></div>

    <div><img src="/img/Mapsicle_Map.png" alt="Display Map here.."/></div>

    <div>
      <label htmlFor="city">City: </label>
        <select name="city" id="city" className="input-button" onChange={handleSelect}>
          <option vallue="">Select</option>
          <option value="chicago" selected>Chicago</option>
          <option value="san francisco">San Francisco</option>
          <option value="san diego">San Diego</option>
          <option value="new york">New York</option>
        </select>
        
        <Hotels text={""}/>
        
    </div>
  </div>
  );
}


export default App;
