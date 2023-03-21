import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { useParams } from 'react-router-dom'

const EditClimbInfo = ({ id, infoId, editFlag, previousInfo }) => {

    const [climbInfo, setClimbInfo] = useState("")
    const { user, editInfo } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        editInfo({
            info: climbInfo,
            user_id: user.id,
            id: infoId
        })
        editFlag()
    }

    return (
        <div>
            <hr />
            <p>Edit your beta:</p>
            <textarea
                value={climbInfo}
                id="climbName"
                placeholder={previousInfo}
                onChange={(e) => setClimbInfo(e.target.value)}
            >
            </textarea> <br />
        </div>
    )
}

export default EditClimbInfo