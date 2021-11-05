import { useState, useEffect } from 'react'
import axios from 'axios'

const Signup = () => {

  const URL_BASE = "https://ecomerce-master.herokuapp.com/api/v1/signup"

  const [json, setJson] = useState({});


  const handleInput = (e) => {
    e.preventDefault();
    setJson({
      ...json,
      [e.target.name]: e.target.value
    })
  }



  const signUp = async () => {
    try {

    }
    catch {

    }
  }

  useEffect(() => {
    console.log(json);
  }, [json])

  return (

          <div className="signup-form">
              <h2>Sign Up</h2>
              {/* Error */}
              <div className="form-group">
                  <label htmlFor="first_name"> Nombre(s):</label>
                  <input type="text" name="first_name" id="first_name" onChange={handleInput}/>
              </div>
              <div className="form-group">
                  <label htmlFor="last_name"> Apellidos:</label>
                  <input type="text" name="last_name" id="last_name" onChange={handleInput}/>
              </div>
              <div className="form-group">
                  <label htmlFor="birth_date"> Fecha de Nacimiento:</label>
                  <input type="date" name="birth_date" id="birth_date" onChange={handleInput}/>
              </div>
              <div className="form-group">
                  <label htmlFor="gender"> Género:</label>
                  <div>
                    <label htmlFor="genderM"> Masculino</label>
                    <input type="radio" name="gender" id="Male" value="M" onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="genderF"> Femenino</label>
                    <input type="radio" name="gender" id="Female" value="F" onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor="genderO"> Otro</label>
                    <input type="radio" name="gender" id="Otro" value="F" onChange={handleInput}/>
                  </div>
              </div>
              <div className="form-group">
                  <label htmlFor="email"> Email:</label>
                  <input type="email" name="email" id="email" onChange={handleInput}/>
              </div>
              <div className="form-group">
                  <label htmlFor="password"> Password:</label>
                  <input type="password" name="password" id="password" onChange={handleInput}/>
              </div>
          <button type="button" >Sign Up</button>
          </div>
  )
}

export default Signup
