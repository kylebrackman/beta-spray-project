import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';
import ClimbNotesSubmissions from './ClimbNotesSubmissions';

const UserClimbs = () => {
    const { loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <ClimbNotesSubmissions />
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )


}

export default UserClimbs