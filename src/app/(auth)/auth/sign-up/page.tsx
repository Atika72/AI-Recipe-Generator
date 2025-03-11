import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";


export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-36 px-4 pt-2">
      <div className="w-full max-w-sm">
        <form className="bg-violet-100 shadow-md rounded px-10 py-12">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg mb-2"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-600 text-lg mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            //   required={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <p className="text-gray-500 mt-5">Already have an account? <Link href="sign-in" className="text-emerald-600 hover:text-emerald-800">Sign In</Link></p>
        </form>
        <hr className="seperator"/>
        <p className="text-center text-slate-500 mt-3">OR</p>
        <hr/>
        <p className="flex flex-row gap mt-5 gap-2 items-center justify-center align-middle cursor-pointer border border-violet-300 hover:border-violet-400 p-2 rounded-md shadow-lg hover:shadow-inner ">
            <FcGoogle size={23} className=" justify-center align-middle "/>
            Continue with Google
        </p>
      </div>
    </div>
  );
}
