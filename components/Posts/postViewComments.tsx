import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";
import Timestamp from "../timestamp/Timestamp";
import CommentOptions from "./CommentOptions";

type postViewCommentsProps = {
  comment: any;
  inputRef?: React.RefObject<HTMLInputElement>;
};

const postViewComments: React.FC<postViewCommentsProps> = ({
  inputRef,
  comment,
}) => {
    
  const username = "shokhrukh";
  const href = `/dashboard/${username}`;

  let currUserId = "12321";

  return (
    <div className="group p-3 px-3.5  flex items-start space-x-2.5">
      <Link href={href}>
        <Avatar />
      </Link>
      <div className="space-y-1.5">
        <div className="flex items-center space-x-1.5 leading-none text-sm">
          <Link href={href} className="font-semibold">
            {username}
          </Link>
          <p className="font-medium">{comment.body}</p>
        </div>
        <div className="flex h-5 items-center space-x-2.5">
          <Timestamp createdAt={Number(comment.createdAt)} />
          <button
            className="text-xs font-semibold text-neutral-500"
            onClick={() => inputRef?.current?.focus()}
          >
            Reply
          </button>
          {comment.userId === currUserId && (
            <CommentOptions comment={comment} />
          )}
        </div>
      </div>
    </div>
  );
};
export default postViewComments;
