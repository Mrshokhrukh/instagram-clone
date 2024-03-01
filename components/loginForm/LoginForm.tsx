"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import Image from "next/image";
import login from "../../assets/login.png";
import qora from "../../assets/qoraLogo.png";
import { AiFillFacebook } from "react-icons/ai";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="flex space-x-9 text-black">
      <Image src={login} className="hidden md:block w-[400px]" />

      <div className="flex flex-col gap-3 w-[340px] h-auto">
        <div className="text-center p-9 pb-5 border border-gray-300">
          <Image
            src={qora}
            width={200}
            className="px-4 pb-8 m-auto my-2 mt-3"
          />

          <form className="flex flex-col space-y-4 mb-5">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                className="bg-gray-100 border-gray-300 focus:border-gray-400 border-[1px] p-2 w-full font-normal outline-none text-[13px] 
        placeholder:text-gray-500
        "
                placeholder="Email"
              />
              <input
                type="password"
                className="bg-gray-100 border-gray-300 focus:border-gray-400 border-[1px] p-2 w-full font-normal outline-none text-[13px] 
        placeholder:text-gray-500
        "
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

          <a href="" className="text-[12px] text-blue-700">
            Forgot password?
          </a>
        </div>
        <div className="p-4 flex items-center justify-center border border-gray-300">
          dadsa
        </div>
        <p>get the app</p>
        <div>
          <button>play</button>
          <button>play</button>
        </div>
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
