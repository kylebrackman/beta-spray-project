import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClimbSubmissionForm from "../Components/ClimbSubmissionForm";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({
        climb_infos: []
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const [allClimbsList, setAllClimbsList] = useState([])
    const [climbInfoList, setClimbInfoList] = useState([])
    const navigate = useNavigate()

    // should i consider putting all my fetch requests here? including my login / logout?
    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if (data.errors) {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    fetchAllClimbs()
                    fetchAllClimbInfo()
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

    const fetchAllClimbInfo = () => {
        fetch('/climb_infos')
            .then(res => res.json())
            .then(data => {
                setClimbInfoList(data)
            })
    }

    const addNewClimb = (newClimb) => {
        fetch('/climbs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newClimb)
        })
            .then(res => res.json())
            .then(data => {
                setAllClimbsList([...allClimbsList, data]
                )
            })
    }

    const addNewClimbInfo = (newInfo) => {
        fetch('/climb_infos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                setClimbInfoList([...climbInfoList, data])
            })
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchAllClimbs()
    }

    const logout = () => {
        setUser({
            climb_infos: []
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
                addNewClimb,
                allClimbsList,
                addNewClimbInfo
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 