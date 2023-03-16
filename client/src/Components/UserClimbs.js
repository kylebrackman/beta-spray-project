import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';

const UserClimbs = () => {
    const { loggedIn, allClimbsList } = useContext(UserContext)

    const climbOptions = allClimbsList.map(climb => {
        return <option key={climb.id} value={climb.id}>{climb.climb_name}</option>
    })


    if (loggedIn) {

        return (
            <div>
                <h2>
                    Select a climb to take notes on!
                </h2>
                <select>
                    <option>Select</option>
                    {climbOptions}
                </select>
                <br />
                <textarea></textarea>
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )


}

export default UserClimbs