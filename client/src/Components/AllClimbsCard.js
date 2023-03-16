import React from 'react';

const AllClimbsCard = ( { climbName, climbLocation }) => {

    return (
        <div className="row">
            <div className="block">
                <img />
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

