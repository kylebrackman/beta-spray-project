import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';
import ClimbNotesSubmissions from './ClimbNotesSubmissions';
import UserClimbsAndNotes from './UserClimbsAndNotes';

const UserClimbs = () => {
    const { loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <div>
                <UserClimbsAndNotes />
                <ClimbNotesSubmissions />
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )


}

export default UserClimbs