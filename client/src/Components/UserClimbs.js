import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import UserClimbsAndInfo from './UserClimbsAndInfo';

const UserClimbs = () => {
    const { loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
                <UserClimbsAndInfo />
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )
}

export default UserClimbs