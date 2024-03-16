"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PostsOptionsProps = {
  userId?: string;
  post: any;
  className?: string;
};

const PostsOptions: React.FC<PostsOptionsProps> = ({
  userId,
  post,
  className,
}) => {
  const isPostOwner = post?.createdBy === userId;

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <MoreHorizontal
            className={cn(
              "h-5 w-5 cursor-pointer dark:text-neutral-300",
              className
            )}
          ></MoreHorizontal>
        </DialogTrigger>
        <DialogContent className="dialogContent">
          {isPostOwner && (
            <form className="postOption">
              <input type="hidden" name="id" value={post.id} />
              <button
                className={cn(
                  "text-red-500 disabled:cursor-not-allowed w-full p-3 font-medium"
                )}
              >
                Delete post
              </button>
            </form>
          )}
          {isPostOwner && (
            <Link
              href={`/dashboard/p/${post.id}/edit`}
              className="postOption p-3"
            >
              Edit
            </Link>
          )}
          {isPostOwner && (
            <form className="postOption border-0">
              <button className="w-full p-3">Hide like count</button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default PostsOptions;
