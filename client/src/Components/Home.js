import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    if (loggedIn && user) {
        return (
            <div>
                <h1>Welcome to Beta Spray!</h1>
                <div className='home-container'>
                    <div className='home-card'>
                        <h2 className='home-h2'>About</h2>
                        <p className='home-p'>"Beta" is climbing lingo that refers to specific movement and hold styles that can help other climbers complete technical faces!</p>
                        <br />
                        <p className='home-p'>Beta Spray is an application solely based around unlocking the moves to your hardest climbing projects!</p>
                        <br />
                        <p className='home-p'>Currently, Beta Spray is anonymous, and you can only delete and edit comments that you post yourself!</p>
                    </div>
                    <div className='home-card'>
                        <h2 className='home-h2'>How to Use</h2>
                        <p className='home-p'>Navigate to "My Beta" to see any climb info that you've contributed to! If you do not see any climbs, that's normal - you will not see any climbs under "My Beta" until you contribute to them yourself!</p>
                        <br />
                        <p className='home-p'> To add beta to a climb, navigate to the "All Climbs" tab, where you can see a total list of climbs that any user has uploaded!</p>
                        <p className='home-p'> Simply click "Add Beta" and add your contribution to any specific climb, enjoy!</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<h3> Please Login or Signup </h3>)
    }
}

export default Home