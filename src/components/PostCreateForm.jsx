import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostCreateForm = (props) => {
    const [newPost, setNewPost] = useState({title: '', body: ''})
    const changePostName = (event) => setNewPost({...newPost, title: event.target.value});
    const changePostBody = (event) => setNewPost({...newPost, body: event.target.value});
    const addNewPost = (event) => {
        event.preventDefault();
        setNewPost(prevState => ({
            ...prevState,
            id: Date.now()
        }))
        props.call(newPost)
        setNewPost({title: '', body: ''})
    }


    return (
        <form>
            <MyInput type="text" placeholder="Input title" onChange={changePostName} value={newPost.title}/>
            <MyInput type="text" placeholder="Input body" onChange={changePostBody} value={newPost.body}/>
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostCreateForm;