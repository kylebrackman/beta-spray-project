import React, { useState, useContext } from 'react';
import { Route, useParams } from 'react-router-dom'
import { UserContext } from './context/user';

const UserClimbs = () => {
    const { user, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    const params = useParams();
    const userClimbs = user.climbs
    console.log(userClimbs)

    if (loggedIn) {
        const userClimbsList = userClimbs.map(c =>  <li>{c.climb_name}</li>
            // <div>
            //     <li>{c.climb_name}</li>
                
            //     <li>{c.climb_grade}</li>
            //     <br />
            //     <li>{c.climb_location}</li>
            // </div>

        )
        return (
            <div>
                <h3>Your Climbs!</h3>
                <br />
                {userClimbsList}
            </div>
        ) 
    } else 
    return (
        <h3>Not Authorized - Please Signup or Login </h3>
    )

}

export default UserClimbs