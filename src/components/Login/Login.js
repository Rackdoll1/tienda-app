import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { UserContext } from "../../services/userContext";
import { fetchUserToken } from "../../services/fetchToken";



function Login() {

    const history = useHistory();
    const [details, setDetails] = useState({});
    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState(false);


    const submitHandler = async e => {
        e.preventDefault();
        setError(false);

        const result =  await fetchUserToken(details);

        if(!result) {
          setError(true);
        } else {
          setUser(result);
          history.push("/");
        }
    }

    const inputChange = (e) => {
      setDetails({
        ...details,
        [e.target.name]: e.target.value
      })
    }


    return (
      <>
        <form className="layer1" onSubmit={submitHandler}>
          <h1>Hi there! </h1>
            <div className="form-inner">
                <div className="form-group email">
                    <label htmlFor="email"> Email:</label>
                    <input className="ex" type="email" name="email" id="email" onChange={inputChange} required/>
                </div>
                <div className="form-group password">
                    <label htmlFor="password"> Password:</label>
                    <input className="ex" type="password" name="password" id="password" onChange={inputChange} required autoComplete="off"/>
                </div>
            </div>
            <input className="submit" type="submit" value="Login"></input>
        </form>
        {error ?
        <h2 className="form-error">Either email or password is incorrect. Please try again.</h2>
        : null}
    </>
    )
}

export default Login
