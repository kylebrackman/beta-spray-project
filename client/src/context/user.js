import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

function UserProvider({ children }) {


    const [user, setUser] = useState({
        climb_infos: []
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const [allClimbsList, setAllClimbsList] = useState([])
    const [userClimbs, setUserClimbs] = useState([])
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
                    fetchUserClimbs()
                }
            })
    }, [climbInfoList])

    const fetchAllClimbs = () => {
        fetch('/climbs?all_climbs=true')
            .then(res => res.json())
            .then(data => {
                setAllClimbsList(data)
            })
    }

    const fetchUserClimbs = () => {
        fetch (`/users/${user.id}/climbs`)
        // is it possible to get the same result by rendering @current_user climbs from the controller
        // instead of a nested route?
        .then(res => res.json())
        .then(data => {
            setUserClimbs(data)
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

    const editInfo = (climb_info) => {
        fetch(`/climb_infos/${climb_info.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(climb_info)
        })
        .then(res => res.json())
        .then(data => handleEditInfo(data))
        console.log("HERE IS THE CLIMB INFO", climb_info)
    }

    const handleEditInfo = (editedInfo) => {
        const updatedInfoList = climbInfoList.map(info => {
            if (info.id === editedInfo.id) {
                return updatedInfoList
            }
            return climbInfoList
        })
        setClimbInfoList(updatedInfoList)
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

    const onDeleteClimbInfo = (id) => {
        const updatedClimbInfos = climbInfoList.filter(inf => inf.id !== id)
        setClimbInfoList(updatedClimbInfos)
    }

    const deleteClimbInfo = (id) => {
        fetch(`/climb_infos/${id}`, {
            method: "DELETE",
        })
        .then(() => onDeleteClimbInfo(id))
        .catch(error => console.log(error))
    }

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchAllClimbs()
        fetchUserClimbs()
    }

    const logout = () => {
        setUser({
            climb_infos: []
        })
        setLoggedIn(false)
        navigate('/')
        setUserClimbs([])
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
                addNewClimbInfo,
                climbInfoList,
                deleteClimbInfo,
                userClimbs,
                editInfo
            }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 