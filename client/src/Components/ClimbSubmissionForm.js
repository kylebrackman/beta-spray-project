import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom'



const ClimbSubmissionForm = () => {
    const [climbName, setClimbName] = useState("")
    const [climbLocation, setClimbLocation] = useState("")
    const { addNewClimb, errors } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewClimb({
            climb_name: climbName,
            climb_location: climbLocation,
        })
        navigate('/allclimbs')
        setClimbName("")
        setClimbLocation("")
    }

    return (
        <form className='add-beta-submission-form' onSubmit={handleSubmit}>
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
            <input className='submit-info-button' type="submit" />
            <>
                {errors}
            </>
        </form>
    )
}

export default ClimbSubmissionForm