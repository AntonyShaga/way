import React from "react";
import styl from './Post.module.css';

export const Post = (props:any) => {
    return (

        <div className={styl.item}>
            <img className={styl.item__img}
                 src="https://avatars.mds.yandex.net/i?id=b2045f56a0d4ddbe39fcee9fa186bd581f81311b-8437019-images-thumbs&n=13"
                 alt=""/>
            {props.message}
            <div>
                <span>like{props.likeCount}</span>
            </div>
        </div>
    )
}