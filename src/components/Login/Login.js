import { useState } from 'react'
import { fetchUserToken } from "../../services/fetchToken";
import LoginForm from './LoginForm'

const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")


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
