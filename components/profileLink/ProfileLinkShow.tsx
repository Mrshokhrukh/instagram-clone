"use client";
import { auth } from "@/app/fireabase/firebase";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { buttonVariants } from "../ui/button";
import Avatar from "@mui/material/Avatar";
import useGetCurrentUser from "@/hooks/useGetCurrentUser";

const ProfileLinkShow = () => {
  // const [userData, setUserData] = useState<any>();
  const [user] = useAuthState(auth);
  const pathName = usePathname();

  const { userData, isLoading } = useGetCurrentUser();

  const href = `/dashboard/${userData?.username}`;

  const isActive = pathName === href;

  // if (!user) {
  //   return redirect("/login");
  // }

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: isActive ? "secondary" : "ghost",
        className: "navlink flex !justify-center lg:!justify-start",
        size: "lg",
      })}
    >
      <Avatar
        sx={{ width: 33, height: 33 }}
        // className="h-8 w-8"
        // src={userData?.profileImg}
        src={
          userData?.profileImg
            ? userData?.profileImg
            : user?.photoURL
            ? user?.photoURL
            : ""
        }
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
