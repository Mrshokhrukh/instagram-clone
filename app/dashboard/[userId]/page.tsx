import React from "react";

type pageProps = {
  params: { userId: string };
};

const page: React.FC<pageProps> = ({ params: { userId } }) => {
  return (
    <div>
      <h1>{userId}</h1>
    </div>
  );
};
export default page;
