import React, { useState } from 'react';
import NavBar from "./Components/NavBar"
import CreatePost from "./Components/CreatePost";
import PostMapper from "./Components/PostMapper";

function App() {
  // Stateful Variables
  // const onSubmit = () => {
  //   setState()
    // }
  const [posts, setPosts] = useState([
    {
      name: "Rubeus Hagrid",
      post: "You're a wizard, Harry!",
      isLiked: false,
      isDislike: false,
      id: 1,
    },
    {
      name: "Hermione Granger",
      post: "I mean, it's sort of exciting, isn't it; breaking the rules.",
      isLiked: false,
      isDislike: false,
      id: 1,
    },
  ])

  // Return JSX

  return (
    <div>
      <NavBar />
      <CreatePost addNewEntryProperty={addNewEntry} />
      <PostMapper array={posts} /> 
    </div>
  );
}

export default App;
