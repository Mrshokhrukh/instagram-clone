import ViewPost from "@/components/Posts/ViewPost";
import { postData } from "@/test/post";
import React from "react";
type Props = {
  params: {
    postId: string;
  };
};
const PostModal = async ({ params: { postId } }: Props) => {
  // fetch post by id
  await new Promise((res) => setTimeout(res, 2000));

  return <ViewPost postId={postData[0].id} post={postData[0]} />;
};
export default PostModal;
