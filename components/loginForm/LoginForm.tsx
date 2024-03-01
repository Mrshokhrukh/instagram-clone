"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import Image from "next/image";
import qora from "../../assets/qoraLogo.png";
import { AiFillFacebook } from "react-icons/ai";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="flex flex-col gap-3 w-[340px] h-auto">
      <div className="text-center p-9 pb-5 border border-gray-300">
        <Image
          src={qora}
          width={200}
          alt=""
          className="px-3 pb-8 m-auto my-2 mt-3"
        />

        <form className="flex flex-col space-y-4 mb-5">
          <div className="flex flex-col space-y-2">
            <input type="text" className="authInput" placeholder="Email" />
            <input
              type="password"
              className="authInput"
              placeholder="Password"
            />
          </div>
          <button className="font-medium text-sm bg-lightblue text-white rounded p-1.5">
            Log in
          </button>
        </form>

        <div className="flex justify-between items-center m-y-2">
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
          <span className="text-gray-400 text-[12px] font-medium">OR</span>
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
        </div>

        <a
          href=""
          className="flex items-center justify-center mt-5 mb-4 text-sm font-medium text-blue-800 cursor-pointer"
        >
          <span className="mr-2 text-xl">
            <AiFillFacebook />
          </span>
          Log in with Facebook
        </a>

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

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="mt-4 w-full"
      variant={"secondary"}
      aria-disabled={pending}
      onClick={() => ""}
    >
      Login with google
    </Button>
  );
}

export default LoginForm;
