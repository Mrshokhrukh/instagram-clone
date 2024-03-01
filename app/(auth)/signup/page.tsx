import Image from "next/image";
import React from "react";
import qora from "../../../assets/qoraLogo.png";
import { AiFillFacebook } from "react-icons/ai";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex flex-col gap-3 w-[340px] h-auto text-black">
      <div className="text-center p-9 pb-5 border border-gray-300">
        <Image
          src={qora}
          width={200}
          alt=""
          className="px-3 m-auto my-2 mt-3"
        />
        <p className="text-gray-500 font-medium text-sm pb-3.5">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="flex items-center justify-center gap-2 w-full font-medium text-sm bg-dodgerblue text-white rounded p-2">
          <AiFillFacebook className="text-xl" /> Log in with Facebook
        </button>

        <div className="flex justify-between items-center m-y-2 p-4">
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
          <span className="text-gray-400 text-[12px] font-medium">OR</span>
          <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
        </div>

        <form className="flex flex-col space-y-4 mb-5">
          <div className="flex flex-col space-y-2">
            <input type="text" className="authInput" placeholder="Email" />
            <input type="text" className="authInput" placeholder="Full Name" />
            <input type="text" className="authInput" placeholder="Username" />
            <input
              type="password"
              className="authInput"
              placeholder="Password"
            />
          </div>
          <p className="text-[11px] text-gray-500">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-700">Learn More</span>
          </p>
          <button className="font-medium text-sm bg-lightblue text-white rounded p-1.5">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default page;
