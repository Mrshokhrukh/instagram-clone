import React from "react";
import Post from "./Post";
import useGetFeedPosts from "@/hooks/useGetFeedPosts";
type PostsProps = {};
import { postData } from "@/test/post";
const Posts: React.FC<PostsProps> = () => {
  // data fetching logic
  // ;

  return (
    <div className="flex flex-col gap-5">
      {postData.map((post: any, i: any) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};
export default Posts;
