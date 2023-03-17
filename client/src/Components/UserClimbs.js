import React, { useContext, useState } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';

const UserClimbs = () => {
    const { loggedIn, allClimbsList, user, addNewClimbInfo } = useContext(UserContext)
    const climbOptions = allClimbsList.map(climb => {
        return <option key={climb.id} value={climb.id}>{climb.climb_name}</option>
    })

    const [climbInfo, setClimbInfo] = useState("")
    const [climbId, setClimbId] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewClimbInfo({
            info: climbInfo,
            user_id: user.id,
            climb_id: climbId
        })
    }

    if (loggedIn) {
        return (
            <div>
                <h2>
                    Select a climb to take notes on!
                </h2>
                <form onSubmit={handleSubmit}>
                    <select onChange={(e) => setClimbId(e.target.value)}>
                        <option>Select</option>
                        {climbOptions}
                    </select>
                    <br />
                    <textarea
                        value={climbInfo}
                        id="climbName"
                        onChange={(e) => setClimbInfo(e.target.value)}
                    >
                    </textarea> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )


}

export default UserClimbs