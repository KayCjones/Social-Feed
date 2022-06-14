import React, { useState } from 'react';
import NavBar from "./components/NavBar"
import CreatePost from "./Components/CreatePost";
import PostMapper from "./Components/PostMapper";

function App() {
  // Stateful Variables
  const [posts, setPosts] = useState([
    {
      name: " ",
      post: " ",
      isLiked: false,
      isDislike: false,
    }
  ])


  // Return JSX

  return (
    <div>
      <NavBar />
      <CreatePost />
      <PostMapper array={posts} /> 
    </div>
  );
}

export default App;
