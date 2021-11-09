import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../services/userContext";
import axios from "axios";

function Login() {

    const URL_GETUSER = "https://ecomerce-master.herokuapp.com/api/v1/user/me";
    const URL_POST = "https://ecomerce-master.herokuapp.com/api/v1/login";
    const history = useHistory();
    const [details, setDetails] = useState({ email: "", password: "" });
    const [postResponse, setPostResponse] = useState({});
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState(false);

    const submitHandler = e => {
        e.preventDefault()
        login()
        .then(letMeIn());
        console.log(user);

    }

    const inputChange = (e) => {
      setDetails({
        ...details,
        [e.target.name]: e.target.value
      })
    }

    const login = async () => {
      setError(false);
      try {
        await axios.post(URL_POST, details)
        .then(response => {
          setPostResponse(response.data.token);
        });

        // console.log(response.data);
      }
      catch {
        setError(true);
      }
    }

    const letMeIn = async () => {
      try {
        await axios.get(URL_GETUSER, {
          headers: {
            // Authorization: `JWT ${token}`,
            Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODk3MjAxNDIyNGQ1MDAxNzI3OGNkYyIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTYzNjQ4NDYyOSwiaWF0IjoxNjM2Mzk4MjI5fQ.nBSpouiZQQMUnAM-kpCkFpQc8_iU04U6cnZO-svaeRg`
          },
        })
        .then(response => {
          setUser(response.data.user);
        });
      }
      catch(err) {
        console.log(err);
      }

      history.push("/");
    }




    return (
      <>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input type="email" name="email" id="email" onChange={inputChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password:</label>
                    <input type="password" name="password" id="password" onChange={inputChange} required/>
                </div>
            </div>
            <input type="submit" value="LOGIN"></input>
        </form>
        {error ?
        <h2>El correo o la contraseña son incorrectos. Intente de nuevo</h2>
        : null}
    </>
    )
}

export default Login
