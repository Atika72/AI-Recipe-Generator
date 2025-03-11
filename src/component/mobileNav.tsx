"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";

function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      {openMenu ? (
        <AiOutlineClose size={30} onClick={() => setOpenMenu(false)} />
      ) : (
        <MdRestaurantMenu size={30} onClick={() => setOpenMenu(true)} />
      )}

      {/* responsive menu click */}
      <div
        className={`fixed top-16 inset-0 bg-white flex flex-col items-center justify-center z-50 duration-300 ease-in-out ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul
          onClick={() => setOpenMenu(!openMenu)}
          className="flex flex-col justify-between items-center gap-8 font-medium text-2xl text-dark"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#aboutSection">About</Link>
          </li>
          <li>
            <Link href="#skillSetion">Contact</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link href="#contactSection">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
