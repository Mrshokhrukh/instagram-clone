"use client";
import React, { useState } from "react";
import Image from "next/image";
import qora from "../../assets/qoraLogo.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/app/fireabase/firebase";
import { redirect, useRouter } from "next/navigation";

const LoginForm = () => {
  let router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    alert(error.message);
  }
  if (user) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col gap-3 w-[340px] h-auto">
      <div className="text-center p-9 pb-5 border border-gray-300">
        <Image
          priority={true}
          src={qora}
          width={200}
          alt=""
          className="px-3 pb-8 m-auto my-2 mt-3"
        />

        <form className="flex flex-col space-y-4 mb-5" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              className="authInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className="authInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="font-medium text-sm bg-lightblue text-white rounded p-1.5">
            {loading ? "logging in..." : "Sign In"}
          </button>
        </form>

        <div className="flex justify-between items-center m-y-2">
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
          <span className="text-gray-400 text-[12px] font-medium">OR</span>
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
        </div>

        <div
          className="flex items-center justify-center mt-5 mb-4 text-sm font-medium text-blue-800 cursor-pointer"
          onClick={loginWithGoogle}
        >
          <span className="mr-2 text-xl">
            <AiFillGoogleCircle />
          </span>
          Log in with Google
        </div>

        <a href="" className="hover:underline text-[12px] text-blue-700">
          Forgot password?
        </a>
      </div>
      <div
        className="p-4 flex items-center justify-center border border-gray-300 
        text-sm"
      >
        Don't have an account?{" "}
        <a
          href="/signup"
          className="ml-1.5 text-blue-500 font-medium hover:underline"
        >
          Sign up
        </a>
      </div>
      <p className="text-center text-sm my-2">Get the app.</p>
      <div className="flex gap-5 justify-center ">
        <a href="">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt=""
            className="w-[125px] h-[40px]"
          />
        </a>
        <a href="">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt=""
            className="w-[125px] h-[40px]"
          />
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
