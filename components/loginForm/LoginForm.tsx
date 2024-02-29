"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="space-y-3">
      Have a good coding
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={` mb-3 text-2xl dark:text-black`}>
          Please Login to continue
        </h1>
      </div>
      <LoginButton />
      <div className="flex h-8 items-end space-x-1"></div>
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
