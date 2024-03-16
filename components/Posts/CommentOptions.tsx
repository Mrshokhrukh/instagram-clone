"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";
// import { toast } from "sonner";
type CommentOptionsProps = {
  comment: Comment;
};

const CommentOptions: React.FC<CommentOptionsProps> = ({ comment }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MoreHorizontal className="h-5 w-5 hidden group-hover:inline cursor-pointer dark:text-neutral-400" />
      </DialogTrigger>
      <DialogContent className="dialogContent">
        <form className="postOption">
          <input type="hidden" name="id" value={comment.id} />
          <button className="text-red-500 font-bold disabled:cursor-not-allowed w-full p-3">
            Delete
          </button>
        </form>

        <DialogClose className="postOption border-0 w-full p-3">
          Cancel
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default CommentOptions;
