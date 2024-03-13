import React from "react";
import Post from "./Post";

type PostsProps = {};

const Posts: React.FC<PostsProps> = () => {
  // data fetching logic
  
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default Posts;
