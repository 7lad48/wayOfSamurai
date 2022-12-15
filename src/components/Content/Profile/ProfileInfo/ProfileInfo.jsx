import React from "react";
import profileInfo from './ProfileInfo.module.css';




const ProfileInfo = (props) => {
    return (
        <div className={profileInfo.wrapper}>
            <div className={profileInfo.picture}>
                <img src="https://lh5.googleusercontent.com/Uw6W7dIIPCfYzY0_nBsv0uJ3KMH4_ZSxoczh0dbebwxoa73ELUYRW1TIuXlGK_POWh5maWZ46U8PtsC-iIUET6YhlpH7iWsA8-lD8fhzEyGUej3O6lDmvYcIn5L4z0QvZwHBkNk" alt="profile picture"/>
            </div>
            <div className={profileInfo.description}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;