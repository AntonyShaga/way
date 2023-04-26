import React from "react";
import styl from './Profile.module.css';
import {MyPost} from "./MyPost/MyPost";

export const Profile = () => {
    return (
        <main className={styl.content}>
            <div>
                <img alt=''
                     src='https://avatars.mds.yandex.net/i?id=60d56346db2f56e06cfab27ccd2dfa48937668f2-8474952-images-thumbs&n=13'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPost />
        </main>
    )
}