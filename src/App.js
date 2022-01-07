import AuthenticateUser from "./AuthenticateUser";
import Hotels from "./Hotels";
import { useState } from "react";
import GetShuttles from "./GetShuttles";

function App() {
  
  const [cityValue, setValue] = useState("");
  
  const handleSelect = (e) => {
    setValue(e);  
  }

  if (!cityValue) {
    return (
      <div align="center">
        <h1 className="title">Umo Shuttle</h1>
  
        <div><img src="./img/Umo_Shuttle_Header.png" alt="Umo Shuttle"/></div>
        <div><img src="./img/Mapsicle_Map.png" alt="Display Map here.."/></div>
  
          <div>
            <form onClick={AuthenticateUser()}>
              <select name="city" id="city" className="input-button" onChange={handleSelect}>
                <option value="" defaultValue>Select City</option>
                <option value="chicago">Chicago</option>
                <option value="san francisco">San Francisco</option>
                <option value="san diego">San Diego</option>
                <option value="new york">New York</option>
              </select>
            </form>
            </div>
          <AuthenticateUser/>
          <Hotels text={document.getElementById("city")?.value}/>    
          <GetShuttles text={document.getElementById("city")?.value}/>
      </div>
      );
    }
 
    else {
      console.log("Either City or Hotel is selected..", document.getElementById("city")?.value);
      return (
        <div>Get Shuttles info</div>
        //This seems to be going into an infinite loop
        // <div>
        //   <GetShuttles text={document.getElementById("city")?.value}/>      
        // </div>         
      );
    }

  }


export default App;
