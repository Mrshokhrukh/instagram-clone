"use client";
import React, { useState } from "react";
import Image from "next/image";
import qora from "../../assets/qoraLogo.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth, db } from "@/app/fireabase/firebase";
import { redirect } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = await createUserWithEmailAndPassword(email, password);

    const userData = {
      uid: newUser?.user.uid,
      username: username,
      password: password,
      email: email,
      fullName: fullName,
      bio: "",
      profileImg: "",
      posts: [],
      likes: [],
      dislikes: [],
      savedPosts: [],
      followersCount: [],
      followingCount: [],
      createdAt: Date.now(),
    };

    try {
      const cityRef = doc(db, "users", `${newUser?.user.uid}`);
      await setDoc(cityRef, userData);
      toast.success("Registered Successfully", { position: "top-right" });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong !", { position: "top-right" });
    }

    setEmail("");
    setPassword("");
    setFullName("");
    setUsername("");
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
        priority={true}
        width={200}
        alt="404"
        className="px-3 m-auto my-2 mt-3"
      />
      <p className="text-gray-500 font-medium text-sm pb-3.5">
        Sign up to see photos and videos from your friends.
      </p>
      <button
        className="flex items-center justify-center gap-2 w-full font-medium text-sm bg-dodgerblue text-white rounded p-2"
        onClick={() => signInWithGoogle()}
      >
        <AiFillGoogleCircle className="text-xl" /> Log in with Google
      </button>

      <div className="flex justify-between items-center m-y-2 p-4">
        <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
        <span className="text-gray-400 text-[12px] font-medium">OR</span>
        <div className="w-[40%] h-0 border-t-[1px] border-gray-200"></div>
      </div>

      <form className="flex flex-col space-y-4 mb-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            type="email"
            className="authInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="authInput"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            className="authInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <div className="flex">
            <input
              type={showPass ? "text" : "password"}
              className="authInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              type="button"
              className="text-[12px] w-[45px] bg-slate-100 border border-l-0 border-gray-300"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "hide" : "show"}
            </button>
          </div>
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
