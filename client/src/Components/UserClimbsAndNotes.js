import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import {Link} from 'react-router-dom'



const UserClimbsAndNotes = () => {
    const { userClimbs, deleteClimbInfo } = useContext(UserContext)

    const userClimbsWithInfo = userClimbs.map(climb => {
        return (

            <div key={climb.id}>
                <Link to={`/climb/${climb.id}`}>{climb.climb_name}</Link>
                <h3>{climb.climb_location}</h3>
                {climb.climb_infos.map((info) => (
                    <div key={info.id}>
                        <p>{info.info}</p>
                        <button onClick={() => deleteClimbInfo(info.id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    })

    return (
        <div>
            {userClimbsWithInfo}
        </div>
    )

}

export default UserClimbsAndNotes