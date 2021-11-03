import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (
        <>
            <div className="Navbar">
                <ul className="alinear">

                    <div className="left">
                        <li>
                            <Link to="/" className="hm"> Home</Link>
                        </li>
                        <div className="searchbar">
                            <input type="text" className="navsize" placeholder="Search..." />
                            <button className="navbutton">Search</button>
                        </div>
                    </div>

                    <div className="right">
                        <li>
                            <Link to="/login" className="log"> Log In</Link>
                        </li>

                        <li>
                            <Link to="/signup" className="sign"> Sign Up</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar
