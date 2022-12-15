import React from "react";
import posts from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    let postData = [
        {id: 1, message: 'Message 1', likesCount: 12},
        {id: 2, message: 'Message 2', likesCount: 1},
        {id: 3, message: 'Message 3', likesCount: 4},
        {id: 4, message: 'Message 4', likesCount: 7},
        {id: 5, message: 'Message 5', likesCount: 5},
        {id: 6, message: 'Me2fsdfsdfdsf', likesCount: 11},
    ];
    let posts = postData.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    return (
        <div className={posts.wrapper}>

            <div className={posts.addRow}>
                <div>
                    <textarea name="" id="" cols="70" rows="6"></textarea>
                </div>
                <div>
                    <button>Добавить</button>
                </div>
            </div>
            <div className={posts.postsWrapper}>
                {posts}
            </div>

        </div>
    );
}

export default Posts;