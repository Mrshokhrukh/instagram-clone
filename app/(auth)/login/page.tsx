import LoginForm from "@/components/loginForm/LoginForm";
import React from "react";
import Image from "next/image";
import login from "../../../assets/login.png";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <div className="flex md:space-x-9 text-black">
        <Image src={login} alt="" className="hidden md:block w-[400px]" />
        <LoginForm />
      </div>
    </div>
  );
};
export default page;
