import React from "react";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type LikeButtonProps = {};

const LikeButton: React.FC<LikeButtonProps> = () => {
  let isLiked = true;
  let likes = 2;
  return (
    <div className="flex flex-col items-center">
      <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => (isLiked = !isLiked)}
      >
        <Heart
          className={cn("h-6 w-6 cursor-pointer", {
            "text-red-500 fill-red-500": isLiked,
          })}
        />
      </Button>
      {likes > 0 ? (
        <p className="text-sm font-bold dark:text-white">
          {likes} {likes > 1 ? "likes" : "like"}
        </p>
      ) : null}
    </div>
  );
};
export default LikeButton;
