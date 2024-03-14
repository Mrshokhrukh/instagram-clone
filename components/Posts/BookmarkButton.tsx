import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

type BookmarkButtonProps = {};

const BookmarkButton: React.FC<BookmarkButtonProps> = () => {
  let isSaved = false;
  return (
    <div className="ml-auto">
      <Button size={"sm"} variant={"ghost"}>
        <Bookmark
          className={cn("h-6 w-6", {
            "dark:fill-white fill-black": isSaved,
          })}
        />
      </Button>
    </div>
  );
};
export default BookmarkButton;
