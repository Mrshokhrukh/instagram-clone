import { auth, db } from "@/app/fireabase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner";

const useGetCurrentUser = () => {
  const [userData, setUserData] = useState<any>();
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(db, "users", `${user?.uid}`);
        const docSnap = await getDoc(docRef);
        setUserData(docSnap.data());
      } catch (error) {
        toast.error(`${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [user]);

  return { userData, isLoading };
};

export default useGetCurrentUser;
