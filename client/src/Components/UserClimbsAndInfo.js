import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom'
import EditClimbInfo from './EditClimbInfo';



const UserClimbsAndInfo = () => {
    const { userClimbs } = useContext(UserContext)

    const userClimbsWithInfo = userClimbs.map(climb => {
        return (
            <div key={climb.id} className="card">
                <div className="card-header">
                    <Link className="climb-link" to={`/climb/${climb.id}`}>{climb.climb_name}</Link>
                    <h3>{climb.climb_location}</h3>
                </div>
                <div className="card-body" style={{ textAlign: "left" }}>
                    {climb.climb_infos.map((info) => (
                        <div key={info.id}>
                            <p>Beta: {info.info}</p>
                            <EditClimbInfo previousInfo={info.info} infoId={info.id} infoUserId={info.user_id} />
                        </div>
                    ))}
                </div>
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