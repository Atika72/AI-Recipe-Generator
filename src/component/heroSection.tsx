import Image from "next/image";
import React from "react";
import SideDish from "./categories/sideDish";
import Breakfast from "./categories/breakfast";
import Lunch from "./categories/lunch";
import Dinner from "./categories/dinner";
import Dessert from "./categories/dessert";
import Snacks from "./categories/snacks";
import Cards from "./categories/cards";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl text-slate-700 px-4 py-4 mt-20 font-semibold">
        Welcome to Tasty Tales
      </h1>
      <form className="flex flex-row bg-white rounded-lg w-full max-w-xl mx-auto items-center ">
        {/* <Image src="/images/fork.png" alt="fork" width={20} height={15} /> */}
        <MdOutlineRestaurantMenu size={25} className="ml-2" />
        <input
          className="px-2 outline-none flex-grow py-3"
          type="text"
          placeholder="Search recipes.."
        />
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto mt-4 text-base text-center">
        <SideDish />
        <Breakfast />
        <Lunch />
        <Dinner />
        <Dessert />
        <Snacks />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12 text-base text-left">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>{" "}
    </div>
  );
}
