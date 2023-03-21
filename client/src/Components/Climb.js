import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/user';
import ClimbInfoSubmissions from './ClimbInfoSubmissions';


const Climb = () => {

    const { id } = useParams()
    const { allClimbsList } = useContext(UserContext)


    const climb = allClimbsList.find(c => c.id === parseInt(id))

    if (!climb) {
        return (
            <div>
                Climb not found
            </div>
        )
    } else {
        return (
            <div>
                <h2>{climb.climb_name}</h2>
                <h3>{climb.climb_location}</h3>
                <ClimbInfoSubmissions />
            </div>
        )
    }
}

export default Climb