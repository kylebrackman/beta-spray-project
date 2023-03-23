import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()


    function logoutUser() {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                logout()
                navigate('/home')
            })
    }

    // had to add the && user for this to work...?
    if (loggedIn && user) {
        return (
            <div style={{ marginBottom: 10 }}>
                <h1 className="header">Beta Spray</h1>
                <h3>Hello {user.username} </h3>
                <NavLink to='/home'>
                    <button className="navbar-button"> Home Page </button>
                </NavLink>
                <NavLink to='/myclimbs'>
                    <button className="navbar-button">My Beta</button>
                </NavLink>
                <NavLink to='/allclimbs'>
                    <button className="navbar-button"> All Climbs </button>
                </NavLink>
                <button onClick={logoutUser} className="navbar-button">Logout</button>
                <br />
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button className="login-button">Login</button>
                </NavLink >
                <NavLink to='/signup'>
                    <button className="login-button">Signup</button>
                </NavLink>
                <hr />
            </div>
        )
    }
}

export default NavBar