import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userClimbs, setUserClimbs] = useState([])
    const navigate = useNavigate()

    // should i consider putting all my fetch requests here? including my login / logout?
    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if (data.error) {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    setUserClimbs(data.climbs)
                }
            })
    }, [])

    // const fetchUserClimbs = () => {
    //     fetch('/climbs')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data) 
    //         setUserClimbs(data)
    //     })
    // }
 
    const addUserClimb = (userClimb) => {
        fetch('/climbs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userClimb)
        })
        .then(res => res.json())
        .then(data => {
            setUserClimbs([...userClimbs, data])
        })
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)    
        navigate('/')
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, userClimbs, addUserClimb }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }