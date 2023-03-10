import React, { useContext } from 'react';
import { UserContext } from './context/user';

function Home() {
    const { user } = useContext(UserContext)

    if (!user || user.error) {
        return (
            <h3>Please Login or Signup</h3>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default Home