import axios from "axios";

function AuthenticateUser() {
   const userName = {
            username: 'bob1',
    };
    axios.post('http://localhost:8888/authenticate', userName,)
    .then(response => {console.log(response);});
    return null;
};

export default AuthenticateUser;
