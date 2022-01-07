function Cities () {

return (
    <div>
      <label htmlFor="city">City: </label>
        <select name="city" id="city" className="input-button">
          <option value="select">Select</option>
          <option value="chicago">Chicago</option>
          <option value="san francisco">San Francisco</option>
          <option value="san diego">San Diego</option>
          <option value="new york">New York</option>
        </select>
  </div>
);
}

export default Cities;