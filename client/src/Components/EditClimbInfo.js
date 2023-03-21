import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'

const EditClimbInfo = ({ infoId, previousInfo }) => {
    const { userClimbs, deleteClimbInfo } = useContext(UserContext);


    const [climbInfo, setClimbInfo] = useState("")
    const { user, editInfo } = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        editInfo({
            info: climbInfo,
            user_id: user.id,
            id: infoId
        })
        setIsEditing(false)

    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    if (isEditing) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <hr />
                    <p>Edit your beta:</p>
                    <textarea
                        value={climbInfo}
                        id="climbName"
                        placeholder={previousInfo}
                        onChange={(e) => setClimbInfo(e.target.value)}
                    >
                    </textarea> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => deleteClimbInfo(infoId)}>Delete</button>
                <button onClick={() => handleEditClick()}>Edit</button>
            </div>
        )
    }


}

export default EditClimbInfo