
function App() {
  return (
  <div align="center">
    <h1>Umo Shuttle</h1>

    <p><img src="/img/Umo_Shuttle_Header.png" alt="Umo Shuttle"/></p>

    <p><img src="/img/Mapsicle_Map.png" alt="Display Map here.."/></p>

    <div>
      <label for="cars">City: </label>
        <select name="city" id="city" className="input-button">
          <option value="select">Select</option>
          <option value="chicago">Chicago</option>
          <option value="san francisco">San Francisco</option>
          <option value="san diego">San Diego</option>
          <option value="new york">New York</option>
        </select>
    </div>
    <div>
      <label for="cars">Hotel: </label>
      <select name="hotel" id="hotel" className="input-button">
        <option value="select">Select</option>
        <option value="hilton">Hilton</option>
        <option value="hyatt">Hyatt</option>
        <option value="holiday inn">Holiday Inn</option>
        <option value="hampton inn">Hampton Inn</option>
        <option value="wyndham">Wyndham</option>
      </select>
    </div>
  </div>
  );
}

export default App;
