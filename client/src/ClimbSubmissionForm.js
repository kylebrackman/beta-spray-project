import React, { useContext, useState } from 'react';
import { UserContext } from './context/user';


const ClimbSubmissionForm = () => {
    const [climbName, setClimbName] = useState("")
    const [climbLocation, setClimbLocation] = useState("")
    const { addUserClimb } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addUserClimb({
            climb_name: climbName,
            climb_location: climbLocation
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Climb Name: </label>
            <input
                type= "text"
                id="climbName"
                value={climbName}
                onChange={(e) => setClimbName(e.target.value)}
            /> <br />
            <label> Climb Location: </label>
            <input
                type= "text"
                id="climbLocation"
                value={climbLocation}
                onChange={(e) => setClimbLocation(e.target.value)}
            /> <br />
            <input type="submit"/>
        </form>
    )
}
