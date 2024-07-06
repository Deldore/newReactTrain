import React, {useCallback, useState} from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS 1', body: 'Desc 1'},
    {id: 2, title: 'JS 2', body: 'Desc 2'},
    {id: 3, title: 'JS 3', body: 'Desc 3'},
    {id: 4, title: 'JS 34', body: 'Desc 4'},
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Input title"/>
        <input type="text" placeholder="Input body"/>
        <MyButton disabled>Create</MyButton>
      </form>
      <PostList posts={posts} title={'About JS'}/>
    </div>
  );
}

export default App;
