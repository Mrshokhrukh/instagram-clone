"use client";
import React from "react";
import { Card } from "../ui/card";

import { Avatar } from "@mui/material";
import Timestamp from "../timestamp/Timestamp";
import PostsOptions from "./PostsOptions";
import useMount from "@/hooks/useMount";
import useGetFeedPosts from "@/hooks/useGetFeedPosts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/fireabase/firebase";

import useGetCurrentUser from "@/hooks/useGetCurrentUser";
import Image from "next/image";
import PostActions from "./PostActions";
import Link from "next/link";
import Comments from "./Comments";

type PostProps = {
  post: any;
};

const Post: React.FC<PostProps> = ({ post }) => {
  let mount = useMount();
  const [user] = useAuthState(auth);
  // const { posts, isLoading } = useGetFeedPosts();
  const { userData, isLoading } = useGetCurrentUser();
  const username = userData?.username;

  if (!mount) {
    return null;
  }
  return (
    <div className="flex flex-col space-y-2.5">
      <div className="flex items-center justify-between px-3 sm:px-0">
        <div className="flex space-x-3 items-center">
          <Avatar src="" className="!w-8 !h-8" />
          <div className="text-sm">
            <p className="space-x-1 flex">
              <span className="font-semibold">{"shokhrukh"}</span>
              <span className="text-[7px]">●</span>
              <Timestamp createdAt={Number(post.createdAt)} />
            </p>
            <p className="text-xs text-black dark:text-white font-medium">
              Dubai united states
            </p>
          </div>
        </div>
        <PostsOptions userId={user?.uid} post={post} />
      </div>
      <Card className="relative h-[460px] w-full overflow-hidden rounded-none">
        <img
          src="https://marketplace.canva.com/EAFNVAn583I/1/0/1600w/canva-minimal-paper-coming-soon-instagram-post-Epfk6z-VnXM.jpg"
          alt="post image"
          className="w-full h-full sm:rounded-md !object-cover"
        />
      </Card>

      <PostActions post={post} userId={user?.uid} className="px-3 sm:px-0" />
      {post.caption && (
        <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
          <Link href={`/dashboard/${username}`} className="font-bold">
            {username}
          </Link>
          <p>{post.caption}</p>
        </div>
      )}

      <Comments postId={post.id} comments={post.comments} user={userData} />
    </div>
  );
};
export default Post;
