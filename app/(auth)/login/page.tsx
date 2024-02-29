import LoginForm from "@/components/loginForm/LoginForm";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default page;
