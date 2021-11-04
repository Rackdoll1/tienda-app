import { useState, useEffect } from 'react'
import axios from 'axios'
import LoginForm from './LoginForm'

const Login = () => {


    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }


    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")

    // were gonna pass details
    const Login = details => {
        console.log(details.email)
    }

    const Logout = () => {
        console.log("Logout")
    }
    return (
        <div>
            {(user.email != "") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>

            ) : <LoginForm Login={Login} error={error}></LoginForm>}

        </div>



    )
}

export default Login
