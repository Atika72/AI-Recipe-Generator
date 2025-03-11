import Image from "next/image";
import React from "react";
import { MdOutlineTimer } from "react-icons/md";
import { BiDish } from "react-icons/bi";


export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-8 px-4 max-w-7xl mx-auto mt-20">
      {/* Left side - Recipe info */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-rose-200 text-rose-500 px-4 py-1 rounded-full w-fit text-sm font-medium mb-4">
          RECIPE OF THE DAY
        </div>

        <h1 className="text-5xl font-bold mb-6">
          Spinach and
          <br />
          Feta Egg Muffins
        </h1>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-gray bg-white p-3">
            <BiDish size={20} />
            <span>Italian</span>
          </div>
          </div>
            
          <div className="flex items-center gap-2 text-gray bg-white p-3">
            <MdOutlineTimer size={20} />
            <span>1 hour and 30 mins</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8 max-w-xl">
          There are many variations of passages, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don't look even..
        </p>

        <div className="flex gap-4">
          <button className="bg-rose-500 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Cook Now
          </button>
          <button className="bg-teal-500 border border-gray-300 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Right side - Images */}
      <div className="flex-1 relative">
        <div className="relative h-[600px] overflow-hidden">
          {/* Main image - person cooking */}
          <Image
            src="/images/hero.png"
            alt="Person cooking"
            layout="fill"
            className="rounded-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
}
