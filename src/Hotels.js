function Hotels(props) {
    alert(props.text);
    if (props.text === "Select") {
        return (<div>none</div>)
    }
    else {
        return (
            <div>

                <label htmlFor="hotels">Hotel: </label>
                <select name="hotel" id="hotel" className="input-button">
                    <option value="select">Select</option>
                    <option value="hilton">Hilton</option>
                    <option value="hyatt">Hyatt</option>
                    <option value="holiday inn">Holiday Inn</option>
                    <option value="hampton inn">Hampton Inn</option>
                    <option value="wyndham">Wyndham</option>
                </select>
        </div>
        );
        }
}
export default Hotels;