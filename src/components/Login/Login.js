import React, { useState } from 'react'
import style from '../../styles/atomos/atomos.scss'
function Login({ Login, error }) {

    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault()
        console.log(details);
    }

    const inputChange = (e) => {
      setDetails({
        ...details,
        [e.target.name]: e.target.value
      })
    }

    // const emailChange = (e) => {
    //     setDetails({ ...details, email: e.target.value })
    //     //console.log({...details}) es lo que se va concatenando para formar el mail
    //
    // }
    //
    // const passChange = (e) => {
    //     setDetails({ ...details, password: e.target.value })
    //     //console.log({ ...details })
    // }


    return (
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
    )
}

export default Login
