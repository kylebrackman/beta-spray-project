import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import AllClimbsCard from './AllClimbsCard';



const AllClimbs = () => {
    const { allClimbsList } = useContext(UserContext)
    console.log(allClimbsList)

    return (
        allClimbsList.map(climb => {
            return <AllClimbsCard
                key={climb.id}
                climbName={climb.climb_name}
                climbLocation={climb.climb_location}
            />
        })
    )

}

export default AllClimbs