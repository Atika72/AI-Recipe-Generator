import Link from "next/link";
import Image from "next/image";
import MobileNav from "./mobileNav";

export default function Navbar() {
  return (
    <header className="text-zinc-800 p-4 flex justify-between items-center">
      <div className="flex flex-row space-x-3 items-center px-4">
        <Image
          src="/images/fork.png"
          alt="Tasty Tales"
          width={30}
          height={30}
        />
        <h1 className="logo-text text-3xl font-bold">Tasty Tales</h1>
      </div>
      <div className="hidden lg:flex flex-row space-x-5 px-5 justyify-center text-lg md:px-7 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="hidden lg:flex space-x-5 px-5 text-lg">
        <Link href={"/sign-in"}>Sign In</Link>
        <Link href={"/sign-up"}>Sign Up</Link>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
