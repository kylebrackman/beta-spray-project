import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { login } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then((user) => {
                if (!user.error) {
                    login(user)
                    navigate('/home')
                } else {
                    setUsername("")
                    setPassword("")
                    const errorLi = <li>{user.error}</li>
                    setError(errorLi)
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br />
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />
                <input type="submit" />
            </form>
            <>
                {error}
            </>
        </div>
    )
}



export default Login