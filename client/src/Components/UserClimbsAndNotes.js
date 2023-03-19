import React, { useContext } from 'react';
import { UserContext } from '../context/user';


const UserClimbsAndNotes = () => {
    const { userClimbs, deleteClimbInfo } = useContext(UserContext)

    const userClimbsWithInfo = userClimbs.map(climb => {
        return (

            <div key={climb.id}>
                <h2>{climb.climb_name}</h2>
                <h3>{climb.climb_location}</h3>
                {climb.climb_infos.map((info) => (
                    <p key={info.id}>{info.info}</p>
                ))}
            </div>
        )
    })

    return (
        <div>
            {userClimbsWithInfo}
        </div>
    )


    // const userClimbsWithInfo = climbInfoList.map(info => {
    //     return (
    //         <div key={info.id}>
    //             <h3>
    //                 {info.climb.climb_name}
    //             </h3>
    //             <p> {info.climb.climb_location} </p>
    //             <br />
    //             <p> {info.info} </p>
    //             <button onClick={() => deleteClimbInfo(info.id)}>Delete</button>
    //         </div>
    //     )
    // })

    // return (
    //     <div>
    //         {userClimbsWithInfo}
    //     </div>
    // )

}

export default UserClimbsAndNotes