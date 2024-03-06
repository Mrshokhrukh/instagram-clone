"use client";
import React, { useState } from "react";
import Image from "next/image";
import qora from "../../assets/qoraLogo.png";
import { AiFillFacebook } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/fireabase/firebase";
import { redirect } from "next/navigation";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };

  if (error) {
    alert(error.message);
  }
  if (user) {
    return redirect("/login");
  }

  return (
    <div className="text-center p-9 pb-5 border border-gray-300">
      <Image
        src={qora}
        width={200}
        priority={true}
        alt="404"
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

      <form className="flex flex-col space-y-4 mb-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            className="authInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="authInput"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            className="authInput"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="authInput"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <p className="text-[11px] text-gray-500">
          People who use our service may have uploaded your contact information
          to Instagram. <span className="text-blue-700">Learn More</span>
        </p>
        <button className="font-medium text-sm bg-lightblue text-white rounded p-1.5">
          {loading ? "Registering..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
