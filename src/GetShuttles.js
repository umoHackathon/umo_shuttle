import axios from "axios";
import { useState, useEffect} from "react";

function GetShuttles(props) {
    const [userName, setUserName] = useState(null);
    
    useEffect(() => {
        getData();
    });

    function getData() {
        axios.get("http://localhost:8888/shuttles", {params:{username:"bob1"}})
        .then((response) => setUserName({ ...response.data, username: "bob1"}));    
    }

    
    return(
        <div>Populate shuttle data..
        </div>
    );
};

export default GetShuttles;
    