import React, { useContext } from 'react';
import { UserContext } from '../context/user';


const UserClimbsAndNotes = () => {
    const { climbInfoList } = useContext(UserContext)

    const userClimbsWithInfo = climbInfoList.map(info => {
        return (
            <div key={info.id}>
                <h3>
                    {info.climb.climb_name}
                </h3>
                <p> {info.climb.climb_location} </p>
                <br />
                <p> {info.info} </p>
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