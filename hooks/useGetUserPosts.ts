import { auth, db } from "@/app/fireabase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postsData, setPosts] = useState<any>();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("createdBy", "==", user?.uid)
        );
        const querySnap = await getDocs(q);

        let posts = <any[]>[];

        querySnap.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);

        setPosts(posts);
        
      } catch (error) {
        toast.error(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [user, postsData]);

  return { isLoading, postsData };
};

export default useGetUserPosts;
