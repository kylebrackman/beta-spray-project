import React, { useState, useEffect } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])

    function login() {
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    function signup(user) {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider }