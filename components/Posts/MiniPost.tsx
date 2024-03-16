"use client";
import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
import Timestamp from "../timestamp/Timestamp";
import PostsOptions from "./PostsOptions";

type MiniPostProps = {
  post: any;
};

const MiniPost: React.FC<MiniPostProps> = ({ post }) => {
  let username = "shokhrukh";

  let href = `/dashboard/${username}`;

  return (
    <div className="group p-3 px-3.5 flex items-start space-x-2.5">
      <Link href={href}>
        <Avatar />
      </Link>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-1.5 leading-none text-sm">
          <Link href={href} className="font-semibold">
            {username}
          </Link>
          <p className="font-medium">{post.caption}</p>
        </div>
        <div className="flex h-5 items-center space-x-2.5">
          <Timestamp createdAt={Number(post.createdAt)} />
          <PostsOptions
            post={post}
            userId={post.createdBy}
            className="hidden group-hover:inline"
          />
        </div>
      </div>
    </div>
  );
};
export default MiniPost;
