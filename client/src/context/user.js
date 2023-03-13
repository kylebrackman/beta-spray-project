import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [userClimbs, setUserClimbs] = useState([])

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
                    fetchUserClimbs()
                }
            })
    }, [])

    const fetchUserClimbs = () => {
        fetch('/climbs')
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            setUserClimbs(data)
        })
    }

    const addUserClimb = (climb) => {
        fetch('/climbs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(climb)
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
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, userClimbs }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }