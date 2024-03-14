import { cn } from "@/lib/utils";

import Link from "next/link";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ActionIconComment from "./ActionIconComment";
import ShareButton from "./ShareButton";
import BookmarkButton from "./BookmarkButton";

type PostActionsProps = {
  userId?: string;
  post: any;
  className?: string;
};

const PostActions: React.FC<PostActionsProps> = ({
  userId,
  post,
  className,
}) => {
  return (
    <div className={cn("relative flex items-start w-full gap-x-2 ", className)}>
      <LikeButton />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIconComment />
      </Link>
      <ShareButton postId={post.id} />
      <BookmarkButton />
    </div>
  );
};
export default PostActions;
