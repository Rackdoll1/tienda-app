import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../services/usuarioSesionIniciada";

import axios from 'axios'

const Signup = () => {

  const URL_BASE = "https://ecomerce-master.herokuapp.com/api/v1/signup"

  const [json, setJson] = useState({});

  // const [user, setUser] = useContext(UserContext);


  const handleInput = (e) => {
    e.preventDefault();
    setJson({
      ...json,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp()
  }

  const signUp = async () => {
    try {
        const response = await axios.post(URL_BASE, json)
        console.log(response);
    }
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(json);
  }, [json])

  return (

          <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit}>
              {/* Error */}
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
                <div className="form-group">
                    <label htmlFor="password"> Password:</label>
                    <input type="password" name="password" id="password" onChange={handleInput} required/>
                </div>
            <input type="submit" value="Sign Up"></input>
          </form>
          </div>
  )
}

export default Signup
