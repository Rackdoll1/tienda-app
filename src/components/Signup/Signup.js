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
    e.preventDefault();
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
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
        
                <div className="form-group">
                    <label htmlFor="first_name"> Nombre(s):</label>
                    <input type="text" name="first_name" id="first_name" onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="last_name"> Apellidos:</label>
                    <input type="text" name="last_name" id="last_name" onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="birth_date"> Fecha de Nacimiento:</label>
                    <input type="date" name="birth_date" id="birth_date" onChange={handleInput} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="gender"> Género:</label>
                    <div>
                      <label htmlFor="genderM"> Masculino</label>
                      <input type="radio" name="gender" id="Male" value="M" onChange={handleInput} required/>
                    </div>
                    <div>
                      <label htmlFor="genderF"> Femenino</label>
                      <input type="radio" name="gender" id="Female" value="F" onChange={handleInput} required/>
                    </div>
                    <div>
                      <label htmlFor="genderO"> Otro</label>
                      <input type="radio" name="gender" id="Otro" value="F" onChange={handleInput} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input type="email" name="email" id="email" onChange={handleInput} required/>
                </div>
                <div className="form-group radio-options" >
                    <label htmlFor="password"> Password:</label>
                    <input type="password" name="password" id="password" onChange={handleInput} required autoComplete="off"/>
                </div>
                <div className="form-group radio-options">
                  <label htmlFor="role"> Rol:</label>
                  <div>
                    <label htmlFor="roleC"> Comprador</label>
                    <input type="radio" name="role" id="customer" value="CUSTOMER" onChange={handleInput} required/>
                  </div>
                  <div>
                    <label htmlFor="roleA"> Vendedor</label>
                    <input type="radio" name="role" id="admin" value="ADMIN" onChange={handleInput} required/>
                  </div>
                </div>
                <input type="submit" value="Sign Up"></input>
            </form>
          </div>
          {error ?
          <h2>El correo ingresado ya se encuentra en uso. Intente con otro correo.</h2>
          : null}
        </>
  )
}

export default Signup
