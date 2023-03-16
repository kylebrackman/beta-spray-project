import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'



const ClimbSubmissionForm = ({ addClimbFlag }) => {
    const [climbName, setClimbName] = useState("")
    const [climbLocation, setClimbLocation] = useState("")
    const { addUserClimb } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addUserClimb({
            climb_name: climbName,
            climb_location: climbLocation,
        })
        navigate('/myclimbs')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Climb Name: </label>
            <input
                type="text"
                id="climbName"
                value={climbName}
                onChange={(e) => setClimbName(e.target.value)}
            /> <br />
            <label> Climb Location: </label>
            <input
                type="text"
                id="climbLocation"
                value={climbLocation}
                onChange={(e) => setClimbLocation(e.target.value)}
            /> <br />
            <input type="submit" />
        </form>
    )
}

export default ClimbSubmissionForm