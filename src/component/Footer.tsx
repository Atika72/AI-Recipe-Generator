import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-100 to-teal-100 mt-6 rounded-lg shadow-sm ">
      <div className=" mx-auto max-w-7xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Tasty Tales
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2025
          <a href="https://flowbite.com/" className="hover:underline">
            Tasty Tales™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
