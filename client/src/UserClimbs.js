import React, { useState, useContext } from 'react';
import { Route, useParams } from 'react-router-dom'
import { UserContext } from './context/user';

const UserClimbs = () => {
    const {} = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    const params = useParams();

    return (
        <div>
            <h3>Your Climbs!</h3>
        </div>
    )
}

export default UserClimbs