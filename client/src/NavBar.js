import React, { useContext } from "react";
import { UserContext } from "./context/user";
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
                navigate('/')
            })
    }

    // had to add the && user for this to work...?
    if (loggedIn && user) {
        return (
            <div>
                <h3>Hello {user.username} </h3>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink >
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <hr />
            </div>
        )
    }
}

export default NavBar