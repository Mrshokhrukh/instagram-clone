"use client";
import { auth, db } from "@/app/fireabase/firebase";
import { cn } from "@/lib/utils";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { buttonVariants } from "../ui/button";
import Avatar from "@mui/material/Avatar";

const ProfileLinkShow = () => {
  const [userData, setUserData] = useState<any>();
  const [user] = useAuthState(auth);

  const pathName = usePathname();

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", `${user?.uid}`);
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    };
    getData();
  }, [user]);

  const href = `/dashboard/${userData?.username}`;

  const isActive = pathName === href;

  if (!user) {
    return;
  }

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "secondary" : "ghost",
        className: "navlink flex !justify-center",
        size: "lg",
      })}
    >
      <Avatar
        sx={{ width: 33, height: 33 }}
        // className="h-8 w-8"
        src={userData?.profileImg ? userData?.profileImg : user?.photoURL}
      />

      <p
        className={`${cn("hidden lg:block", {
          "font-extrabold": isActive,
        })}`}
      >
        Profile
      </p>
    </Link>
  );
};
export default ProfileLinkShow;
