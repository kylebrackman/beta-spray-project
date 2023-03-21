import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import EditClimbInfo from './EditClimbInfo';

const UserClimbsAndInfo = () => {
    const { userClimbs, deleteClimbInfo } = useContext(UserContext);
    const [editFlag, setEditFlag] = useState({});

    const handleEditClick = (infoId) => {
        setEditFlag({ ...editFlag, [infoId]: true });
    };

    // const handleEditCancel = (infoId) => {
    //     setEditFlag({ ...editFlag, [infoId]: false });
    // };

    const userClimbsWithInfo = userClimbs.map((climb) => {
        return (
            <div key={climb.id}>
                <Link to={`/climb/${climb.id}`}>{climb.climb_name}</Link>
                <h3>{climb.climb_location}</h3>
                {climb.climb_infos.map((info) => (
                    <div key={info.id}>
                        <p>{info.info}</p>
                        <button onClick={() => deleteClimbInfo(info.id)}>Delete</button>
                        {editFlag[info.id] ? (
                            <EditClimbInfo  infoId={info.id} previousInfo={info.info}/>
                        ) : (
                            <button onClick={() => handleEditClick(info.id)}>Edit</button>
                        )}
                    </div>
                ))}
            </div>
        );
    });

    return <div>{userClimbsWithInfo}</div>;
};

export default UserClimbsAndInfo;
