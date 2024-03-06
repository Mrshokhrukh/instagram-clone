import React from "react";

import RegisterForm from "@/components/registerForm/RegisterForm";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex flex-col gap-3 w-[340px] h-auto text-black">
      <RegisterForm />
    </div>
  );
};
export default page;
