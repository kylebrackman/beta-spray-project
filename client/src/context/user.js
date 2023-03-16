import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({
        climbs: []
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const [userClimbs, setUserClimbs] = useState([])
    const [allClimbsList, setAllClimbsList] = useState([])
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
                    fetchAllClimbs()
                }
            })
    }, [])

    const fetchAllClimbs = () => {
        fetch('/climbs')
        .then(res => res.json())
        .then(data => {
            setAllClimbsList(data)
        })
    }
 
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
        setUser({
            climbs: []
        })
        setLoggedIn(false)    
        navigate('/')
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider
        value={{
            user,
            login,
            logout,
            signup,
            loggedIn,
            userClimbs,
            addUserClimb,
            allClimbsList
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }