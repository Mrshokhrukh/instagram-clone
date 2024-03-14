"use client";
import { useEffect, useState } from "react";
import useGetCurrentUser from "./useGetCurrentUser";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/fireabase/firebase";

const useGetFeedPosts = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>();
  const { userData } = useGetCurrentUser();

  useEffect(() => {
    const getFeedPosts = async () => {
      if (userData?.followingCount.length === 0) {
        setLoading(false);
        setPosts([]);
        return;
      }

      const q = query(
        collection(db, "posts"),
        where("createdBy", "in", userData?.followingCount)
      );

      try {
        const querySnap = await getDocs(q);
        const feedPosts = <any[]>[];

        querySnap.forEach((doc) => {
          feedPosts.push({ ...doc.data(), id: doc.id });
        });
        feedPosts.sort((a, b) => b.createdAt - a.createdAt);

        setPosts(feedPosts);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    if (userData) getFeedPosts();
  }, [posts, isLoading]);

  return { posts, userData, isLoading };
};

export default useGetFeedPosts;
