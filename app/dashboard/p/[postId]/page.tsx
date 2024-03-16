import React from "react";
type Props = {
  params: {
    postId: string;
  };
};

const page =  ({ params: { postId } }: Props) => {
  console.log(postId);
  return <div>pageasdas</div>;
};

export default page;
