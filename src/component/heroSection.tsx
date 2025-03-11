import Image from "next/image";
import React from "react";
import { MdOutlineTimer } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 py-8 px-4 max-w-7xl mx-auto mt-20">
      {/* Left side - Recipe info */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full w-fit text-sm font-medium mb-4">
          RECIPE OF THE DAY
        </div>

        <h1 className="text-5xl font-bold mb-6">
          Spinach and
          <br />
          Feta Egg Muffins
        </h1>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                alt="John Carter"
                width={40}
                height={40}
              />
            </div>
            <span className="font-medium">John Carter</span>
          </div>

          <div className="flex items-center gap-2 text-gray- bg-white p-3">
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
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2">
            Cook Now
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full flex items-center gap-2">
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
