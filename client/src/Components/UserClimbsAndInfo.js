import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import {Link} from 'react-router-dom'
import EditClimbInfo from './EditClimbInfo';



const UserClimbsAndInfo = () => {
    const { userClimbs, deleteClimbInfo } = useContext(UserContext)

    const userClimbsWithInfo = userClimbs.map(climb => {
        return (
            <div key={climb.id}>
                <Link to={`/climb/${climb.id}`}>{climb.climb_name}</Link>
                <h3>{climb.climb_location}</h3>
                {climb.climb_infos.map((info) => (
                    <div key={info.id}>
                        <p>{info.info}</p>
                        <EditClimbInfo previousInfo={info.info} infoId={info.id}/>
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

export default UserClimbsAndInfo