"use client";
import React from "react";
import { Card } from "../ui/card";
import useGetFeedPosts from "@/hooks/useGetFeedPosts";

type PostProps = {};

const Post: React.FC<PostProps> = () => {
  const { posts } = useGetFeedPosts();
  return (
    <div>
      <Card></Card>
    </div>
  );
};
export default Post;
