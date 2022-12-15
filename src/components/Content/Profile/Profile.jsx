import React from "react";
import profile from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={profile.wrapper}>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;