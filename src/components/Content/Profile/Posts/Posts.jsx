import React from "react";
import posts from "./Posts.module.css"
import Post from "./Post/Post";

const Posts = (props) => {

    let postsItems= props.profilePosts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };
    return (
        <div className={posts.wrapper}>

            <div className={posts.addRow}>
                <div>
                    <textarea ref={newPostElement} cols="70" rows="6"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Добавить</button>
                </div>
            </div>
            <div className={posts.postsWrapper}>
                {postsItems}
            </div>

        </div>
    );
}

export default Posts;