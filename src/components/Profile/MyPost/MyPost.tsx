import React from "react";
import styl from './MyPost.module.css';
import {Post} from "./Post/Post";

export const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you' likeCount='4'/>
            <Post message="It's Mi first post" likeCount='5'/>
        </div>
    )
}