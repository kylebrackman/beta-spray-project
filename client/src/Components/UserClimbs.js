import React, { useContext } from 'react';
// import { Route, useParams } from 'react-router-dom'
import { UserContext } from '../context/user';

const UserClimbs = () => {
    const { loggedIn, user } = useContext(UserContext)
    // // removed because i moved submission form into it's own page
    // // const [formFlag, setFormFlag] = useState(false)
    // // const params = useParams();
    // const addClimbFlag = () => {
    //     setFormFlag(false)
    // }


    if (loggedIn) {
        const userClimbsList = user.climbs.map(c =>
            <div key={c.id}>
                <h2>{c.climb_name}</h2>
                <li>{c.climb_location}</li>
                {/* <li>{c.climb_infos}</li> */}
                <br />
            </div>
        )
        return (
            <div>
                <h3>Your Climbs!</h3>
                <br />
                {userClimbsList}
                {/* {formFlag ? 
                    <ClimbSubmissionForm addClimbFlag={addClimbFlag} /> 
                    :
                    <button onClick={()=> setFormFlag(true)}> Add Climb! </button>
                } */}
            </div>
        )
    } else
        return (
            <h3>Not Authorized - Please Signup or Login </h3>
        )

}

export default UserClimbs