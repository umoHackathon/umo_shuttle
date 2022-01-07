function Cities () {

return (
    <div>
      <label htmlFor="city" className="grid-item col1">City: </label>
        <select name="city" id="city" className="grid-item col2 input-button">
          <option value="" selected>Select</option>
          <option value="chicago">Chicago</option>
          <option value="san francisco">San Francisco</option>
          <option value="san diego">San Diego</option>
          <option value="new york">New York</option>
        </select>
  </div>
);
}

export default Cities;