import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ClimbInfoSubmissions = () => {
    const [climbInfo, setClimbInfo] = useState("")
    const { user, addNewClimbInfo } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        addNewClimbInfo({
            info: climbInfo,
            user_id: user.id,
            climb_id: id
        })
        setClimbInfo("")
        navigate('/myclimbs')
    }

    return (
        <div >
            <h2>
                Add some beta!
            </h2>
            <form className='add-beta-submission-form' onSubmit={handleSubmit}>
                <br />
                <textarea
                    value={climbInfo}
                    id="climbName"
                    onChange={(e) => setClimbInfo(e.target.value)}
                >
                </textarea> <br />
                <input className='submit-info-button' type="submit" />
            </form>
        </div>
    )

}

export default ClimbInfoSubmissions