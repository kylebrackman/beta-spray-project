import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import AllClimbsCard from './AllClimbsCard';
import ClimbSubmissionForm from './ClimbSubmissionForm';



const AllClimbs = () => {
    const { allClimbsList } = useContext(UserContext)

    const allClimbs = allClimbsList.map(climb => {
        return <AllClimbsCard
            key={climb.id}
            id={climb.id}
            climbName={climb.climb_name}
            climbLocation={climb.climb_location}
        />
    })

    return (
        <div>
            <h2>Submit a New Climb!</h2>
            <ClimbSubmissionForm />
            <br />
            <h1>All Climbs!</h1>
            {allClimbs}
        </div>
    )

}

export default AllClimbs