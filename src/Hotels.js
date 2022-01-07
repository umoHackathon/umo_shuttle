
import AuthenticateUser from "./AuthenticateUser";

function Hotels(props) {
 
    if (props.text === "") {
        return (<div></div>)
    }
    else {
        return (
            <div>
                <form onClick={AuthenticateUser()}>
                    <select name="hotel" id="hotel" className="input-button">
                        <option value="" defaultValue>Select Hotel</option>
                        <option value="hilton">Hilton</option>
                        <option value="hyatt">Hyatt</option>
                        <option value="holiday inn">Holiday Inn</option>
                        <option value="hampton inn">Hampton Inn</option>
                        <option value="wyndham">Wyndham</option>
                    </select>
                </form>
                
            </div>
        );
    }
}
export default Hotels;