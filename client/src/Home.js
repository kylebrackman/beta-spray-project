import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn) {
        return (
            <h3>{user.username}'s Home Page</h3>
        )
    } else {
        return ( <h3> Please Login or Signup </h3> )
    }
}

export default Home