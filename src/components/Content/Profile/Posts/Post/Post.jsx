import React from "react";
import post from './Post.module.css';

const Post = (props) => {
    return (
        <div className={post.post}>
            <img className={post.avatar} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/american-actress-ava-gardner-news-photo-1608139271. " alt="avatar"/>
            <div className={post.message}>{props.message}</div>
            <div className={post.likes}>🤍 {props.likesCount}</div>
        </div>
    );
}

export default Post;