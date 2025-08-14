"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut, useSession } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();

  if (session && session.user) {
    return <button onClick={() => signOut()}> Sign Out</button>;
  }
  return (
    <div className="flex h-screen">
      <div className=" flex flex-col w-full items-center justify-center  min-h-screen">
        <div className="flex flex-col mb-5 font-semibold text-center text-2xl">
          <h1>YOUR RECIPE</h1>
          <h1>JOURNEY BEGINS NOW</h1>
        </div>
        <h3 className="text-center">Sign Up</h3>

        <form
          action=""
          className="flex flex-col items-center gap-4 w-full max-w-sm mt-5"
        >
          <input
            className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
          />
          <button className="w-full flex flex-row gap gap-2 items-center justify-center align-middle cursor-pointer border bg-rose-400 hover:bg-rose-500 py-2 rounded-md shadow-lg hover:shadow-inner text-white ">
            Sign Up
          </button>
          <button
            className="w-full flex flex-row gap mt-5 gap-2 items-center justify-center align-middle cursor-pointer border border-gray-300 hover:border-rose-400 py-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              signIn("google", { redirect: true, callbackUrl: "/" });
            }}
          >
            <FcGoogle size={23} className=" justify-center align-middle " />
            Continue with Google
          </button>
        </form>
      </div>
      <div
        className="w-full bg-cover bg-norepeat"
        style={{ backgroundImage: 'url("/images/sign-up.jpg")' }}
      ></div>
    </div>
  );
}
