import Posts from "@/components/Posts/Posts";
import PostSkeleton from "@/components/PostsSkeleton/PostSkeleton";
import React, { Suspense } from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main className="flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20 bg-gray-800">
        <Suspense fallback={<PostSkeleton />}>
          <Posts />
        </Suspense>
      </div>
    </main>
  );
};
export default page;
