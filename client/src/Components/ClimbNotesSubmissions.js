import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
// import { useNavigate } from 'react-router-dom'

const ClimbNotesSubmissions = () => {
    const { allClimbsList, user, addNewClimbInfo } = useContext(UserContext)
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
        setClimbInfo("")
        setClimbId("Select")
    }

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

}

export default ClimbNotesSubmissions