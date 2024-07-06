import React from 'react';

const PostItem = (props) => {
    // console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={() => {
                    props.delete(props.post)
                    console.log(props.post.id)
                    }
                }>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;