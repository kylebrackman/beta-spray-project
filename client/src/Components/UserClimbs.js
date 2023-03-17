import React, { useContext, useState } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';

const UserClimbs = () => {
    const { loggedIn, allClimbsList, user } = useContext(UserContext)
    const climbOptions = allClimbsList.map(climb => {
        return <option key={climb.id} value={climb.id}>{climb.climb_name}</option>
    })

    // const userClimbs = user.climb_infos.map(climbInfo => {
    //     climbInfo
    // })

    const [climbInfo, setClimbInfo] = useState("")
    const [climbId, setClimbId] = useState("")



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
                <textarea
                    value={climbInfo}
                    id="climbName"
                    onChange={(e) => setClimbInfo(e.target.value)}
                ></textarea>
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )


}

export default UserClimbs