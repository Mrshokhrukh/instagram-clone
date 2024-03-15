"use client";
import Link from "next/link";
import React, { useState } from "react";

type CommentsProps = {
  postId: string;
  user: any;
  comments: any[];
};

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  const [commentValue, setCommentValue] = useState<string>("");
  let username = "begzod";

  let comCount = 8;
  let commentsArr = ["hello", "world", "header", "good"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      {commentsArr.slice(0, 3).map((com, i) => {
        return (
          <div
            key={i}
            className="text-sm flex items-center space-x-2 font-medium"
          >
            <Link href={`/dashboard/${username}`} className="font-semibold">
              {username}
            </Link>
            <p>{com}</p>
          </div>
        );
      })}

      {comCount > 1 && (
        <Link
          href={`/dashboard/p/${postId}`}
          className="text-sm font-medium text-neutral-500"
        >
          View all {comCount} comments
        </Link>
      )}

      <form
        className="border-b border-gray-300 dark:border-neutral-800
       pb-3 py-1 flex items-center space-x-2 pt-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="comment"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          className="bg-transparent text-sm border-none focus:outline-none flex-1
          placeholder-neutral-500 dark:text-white dark:placeholder-neutral-400 font-medium
          "
          placeholder="Add a comment"
        />

        {commentValue.trim().length > 1 && (
          <button
            className="text-sky-500 text-sm font-semibold hover:text-white
          disabled:hover:text-sky-500 disabled:cursor-not-allowed
          "
          >
            Post
          </button>
        )}
      </form>
    </div>
  );
};
export default Comments;
