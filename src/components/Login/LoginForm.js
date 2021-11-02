import React, { useState } from 'react'
import style from '../../styles/atomos/atomos.scss'
function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault()
        Login(details)
    }


    const emailChange = (e) => {
        setDetails({ ...details, email: e.target.value })
        //console.log({...details}) es lo que se va concatenando para formar el mail

    }

    const passChange = (e) => {
        setDetails({ ...details, password: e.target.value })
        //console.log({ ...details })
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* Error */}
                <div className="form-group">
                    <label htmlFor="email"> Email:</label>
                    <input type="email" name="email" id="email" onChange={
                        emailChange}
                        value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password:</label>
                    <input type="password" name="password" id="password" onChange={
                        passChange}
                        value={details.password}></input>
                </div>
            </div>
            <input type="submit" value="LOGIN"></input>
        </form>
    )
}

export default LoginForm
