import React, { useContext } from 'react';
import { UserContext } from '../context/user';


const UserClimbsAndNotes = () => {
    const { climbInfoList } = useContext(UserContext)

    const userClimbsWithInfo = climbInfoList.map(info => {
        return (
            <h3 key={info.id}>
                {info.info}
            </h3>
        )
    })

    return (
        <div>
            {userClimbsWithInfo}
        </div>
    )

}

export default UserClimbsAndNotes