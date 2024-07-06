import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {props.title}
            </h1>
            { (props.posts.length) ?
            props.posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} delete={props.delete}/>
            ) : (
                <p style={{textAlign: 'center'}}>Посты не найдены :(</p>
                )}
        </div>
    );
};

export default PostList;