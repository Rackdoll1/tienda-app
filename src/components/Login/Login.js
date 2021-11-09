import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../services/userContext";
import axios from "axios";

function Login() {

    const URL_BASE = "https://ecomerce-master.herokuapp.com/api/v1/";
    const history = useHistory();
    const [details, setDetails] = useState({});
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState(false);


    const letMeIn = async (token) => {
      try {
        const response = await axios.get(`${URL_BASE}user/me`, {
          headers: {
            // Authorization: `JWT ${token}`,
            Authorization: `JWT ${token}`
          }
        });
        setUser(response.data.user);
        history.push("/");
      }
      catch(err) {
        console.log(err);
      }
    }

    const login = async () => {
      setError(false);
      try {
        await axios.post(`${URL_BASE}login`, details)
          .then(response => {
            letMeIn(response.data.token);
          });
      }
      catch {
        setError(true);
      }

    }

    const submitHandler = e => {
        e.preventDefault()
        login()
    }

    const inputChange = (e) => {
      setDetails({
        ...details,
        [e.target.name]: e.target.value
      })
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
                    <input type="password" name="password" id="password" onChange={inputChange} required autoComplete="off"/>
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
