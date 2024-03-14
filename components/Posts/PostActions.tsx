import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    <div className={cn("relative flex items-center w-full gap-x-2", className)}>
      {/* <LikeButton />
      <Link href={`/dashboard/p/${post.id}`}>
        <ActionIcon>
            <MessageCircle className="h-6 w-6"/>
        </ActionIcon>
      </Link>
      <ShareButton />
      <BookmarkButton /> */}
    </div>
  );
};
export default PostActions;
