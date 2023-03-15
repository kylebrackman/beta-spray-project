import React, { useState, useContext } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';
import ClimbSubmissionForm from './ClimbSubmissionForm';

const UserClimbs = () => {
    const { loggedIn, userClimbs } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    // const params = useParams();

    const addClimbFlag = () => {
        setFormFlag(false)
    }


    if (loggedIn) {
        const userClimbsList = userClimbs.map(c =>
            <div>
                <h2>{c.climb_name}</h2>
                <li>{c.climb_location}</li>
                {/* <li>{c.climb_infos}</li> */}
                <br />
            </div>
        )
        return (
            <div>
                <h3>Your Climbs!</h3>
                <br />
                {userClimbsList}
                {formFlag ? 
                    <ClimbSubmissionForm addClimbFlag={addClimbFlag} /> 
                    :
                    <button onClick={()=> setFormFlag(true)}> Add Climb! </button>
                }
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )

}

export default UserClimbs