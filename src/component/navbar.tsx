import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobileNav";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="text-zinc-800 p-4 flex justify-between items-center">
      <div className="flex flex-row space-x-2 items-center px-4">
        <Image
          className="items-center justify-center"
          src="/images/charity-1.gif"
          alt="Tasty Tales"
          width={40}
          height={40}
        />
        <h1 className="logo-text text-3xl font-extrabold pt-3">Tasty Tales</h1>
      </div>
      <div className="hidden lg:flex flex-row space-x-5 px-5 justyify-center text-xl md:px-7 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="hidden lg:flex space-x-5 px-5 text-xl font-normal">
        <Link href={"/sign-in"} className="flex items-center gap-2">
          <FaUserCircle />
          User
        </Link>
        <Link
          href={"/sign-up"}
          className="bg-gradient-to-r from-green-200 to-blue-500 rounded-full px-4 py-1 text-white"
        >
          Sign Up
        </Link>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
