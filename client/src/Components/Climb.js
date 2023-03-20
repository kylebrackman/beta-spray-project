import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/user';
import ClimbNotesSubmissions from './ClimbNotesSubmissions';


const Climb = () => {

    const { id } = useParams()
    const { userClimbs } = useContext(UserContext)


    const climb = userClimbs.find(c => c.id === parseInt(id))
    console.log(climb)

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
                <ClimbNotesSubmissions />
            </div>
        )
    }
}

export default Climb