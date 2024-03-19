import UserPosts from "@/components/userPosts/UserPosts";
import React from "react";

type pageProps = {
  params: { userId: string };
};

const page: React.FC<pageProps> = ({ params: { userId } }) => {
  return (
    <div>
      <h1>{userId} </h1>
      <div>
        <UserPosts userId={userId} />
      </div>
    </div>
  );
};
export default page;
