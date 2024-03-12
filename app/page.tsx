"use client";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./fireabase/firebase";

export default async function Page() {
  const [user] = useAuthState(auth);
  if (user) {
    localStorage.setItem("userId", JSON.stringify(user?.uid));
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
