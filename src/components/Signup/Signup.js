import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { UserContext } from "../../services/userContext";
import { fetchUserToken, signupUser } from "../../services/fetchToken";

const Signup = () => {

  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [json, setJson] = useState({});
  const [error, setError] = useState(false);



  const handleInput = (e) => {
    setJson({
      ...json,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const resultSignUp = await signupUser(json);

    if(!resultSignUp) {
      setError(true);
    } else {
      const details = {
        email: json.email,
        password: json.password
      }

      const resultLogin = await fetchUserToken(details);
      setUser(resultLogin);
      history.push("/");
      }
    }


  return (
        <>
            <form onSubmit={handleSubmit} className="layer2">
              <h1>Welcome!</h1>
                <div className="form-group">
                    <label htmlFor="first_name"> Names(s):</label>
                    <input className="ex" type="text" name="first_name" id="first_name" onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name"> Last Name:</label>
                <input className="ex" type="text" name="last_name" id="last_name" onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="birth_date"> Date of Birth:</label>
               <input className="ex"  type="date" name="birth_date" id="birth_date" onChange={handleInput} required/>
                </div>
                <div className="form-group ">
                    <label htmlFor="gender"> Gender:</label>
                    <div>
                      <input type="radio" name="gender" id="Male" value="M" onChange={handleInput} required />
                      <label htmlFor="genderM"> Male</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" id="Female" value="F" onChange={handleInput} required />
                      <label htmlFor="genderF"> Female</label>

                    </div>
                    <div>
                      <input type="radio" name="gender" id="Otro" value="F" onChange={handleInput} required />
                      <label htmlFor="genderO"> Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input className="ex" type="email" name="email" id="email" onChange={handleInput} required/>
                </div>
                <div className="form-group " >
                    <label htmlFor="password"> Password:</label>
                    <input class="ex" type="password" name="password" id="password" onChange={handleInput} required autoComplete="off"/>
                </div>
                <div className="form-group ">
                  <label htmlFor="role"> Role:</label>
                  <div>
                    <input type="radio" name="role" id="customer" value="CUSTOMER" onChange={handleInput} required />
                    <label htmlFor="roleC"> Client </label>

                  </div>
                  <div>
                    <input type="radio" name="role" id="admin" value="ADMIN" onChange={handleInput} required />
                    <label htmlFor="roleA"> Suppplier/ Salesman</label>
                  </div>
                </div>
                <input class="submit" type="submit" value="Sign Up"></input>
            </form>
          {error ?
          <h2 className="form-error" >This email is already in use. Please use  another one.</h2>
          : null}
      </>
  )
}

export default Signup
