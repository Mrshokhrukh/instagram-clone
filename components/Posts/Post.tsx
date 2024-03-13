"use client";
import React from "react";
import { Card } from "../ui/card";
import useGetFeedPosts from "@/hooks/useGetFeedPosts";
import { Avatar } from "@mui/material";
import Timestamp from "../timestamp/Timestamp";


type PostProps = {};

const Post: React.FC<PostProps> = () => {
  const { posts, isLoading } = useGetFeedPosts();

  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <Avatar src="" className="!w-8 !h-8" />
          <div className="text-sm">
            <p className="space-x-1">
              <span className="font-semibold">shokhrukh</span>
              <span>+</span>
              {/* <Timestamp createdAt={new Date()}/> */}
            </p>
          </div>
        </div>
      </div>
      {/* <Card></Card> */}
    </div>
  );
};
export default Post;
