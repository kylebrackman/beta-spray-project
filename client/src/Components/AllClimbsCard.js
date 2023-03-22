import React from 'react';
import {Link} from 'react-router-dom'


const AllClimbsCard = ( { climbName, climbLocation, id } ) => {

    return (
        <div className="row">
            <div className="block">
                <Link className='add-beta-link' to={`/climb/${id}`}>Add Beta</Link>
                    <div>
                        <h2>{climbName}</h2>
                        <p></p>
                    </div>
                    <p>{climbLocation}</p>
            </div>
        </div>
    )
}

export default AllClimbsCard

