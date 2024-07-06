import React, {useCallback, useState} from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostCreateForm from "./components/PostCreateForm";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS 1', body: 'Desc 1'},
    {id: 2, title: 'JS 2', body: 'Desc 2'},
    {id: 3, title: 'JS 3', body: 'Desc 3'},
    {id: 4, title: 'JS 34', body: 'Desc 4'},
  ]);

    const createNewPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App">
      <PostCreateForm call={createNewPost} posts={posts}/>
      <PostList posts={posts} delete={removePost} title={'About JS'}/>
    </div>
  );
}

export default App;
