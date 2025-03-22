"use client";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosPricetags, IoMdArrowForward } from "react-icons/io";

interface pricingInterface {
  id: number;
  name: string;
  price: string;
  description: any;
}

const PricingCard = ({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description: any;
}) => {
  return (
    <div className="p-6">
      <div className="rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-[0_10px_20px_rgba(20,_184,_166,_1)] border border-teal-400">
        <div className="p-8">
          <h3 className="text-slate-900 text-2xl font-semibold mb-3">{name}</h3>
          <h1 className="text-5xl font-bold">{price}</h1>
          <hr className="h-px my-8 bg-cyan-200 border-0 shadow-sm" />
          <div className="text-slate-500 text-lg font-medium leading-relaxed mt-10">
            {description.map((description: any, i: any) => (
              <ul key={i} className="list-disc pl-4 space-y-0">
                <li className="m-0 p-0 text-base mt-2">{description}</li>
              </ul>
            ))}
          </div>

          <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-zinc-300 group mt-5 w-full">
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-teal-600 group-hover:h-full" />
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <HiArrowLongRight size={30} />
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <HiArrowLongRight className=" text-green-400" size={30} />
            </span>
            <span className="relative w-full text-center font-semibold transition-colors duration-200 ease-in-out group-hover:text-white">
              Get the plan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PricingSection() {
  const pricing = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$0",
      description: [
        "Access to 5 AI-generated recipes per week",
        "Basic meal customization (limited ingredient swaps)",
        "Essential nutrition insights (calories & basic macros)",
      ],
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "$9.99",
      description: [
        "Access to 5 AI-generated recipes per week",
        "Basic meal customization (limited ingredient swaps)",
        "Essential nutrition insights (calories & basic macros)",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "$100.00",
      description: [
        "Access to 5 AI-generated recipes per week.",
        "Basic meal customization (limited ingredient swaps).",
        "Essential nutrition insights (calories & basic macros).",
      ],
    },
  ];

  return (
    <>
      <div className="p-6 flex flex-col justify-center items-center text-center gap-3 pt-20">
        <button className="bg-rose-500 px-4 py-2 rounded-full text-white text-center flex items-center gap-2">
          <IoIosPricetags className="text-white inline-block" size={20} />
          Pricing
        </button>
        <h1 className="text-4xl font-semibold text-gray-700">
          Meal Plans That Fits Your Lifestyle & Budget
        </h1>
        <span className="text-base">
          No hidden fees, no contracts, cancel anytime
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto pt-5">
        {pricing.map((pricingData: pricingInterface) => {
          return (
            <div key={pricingData.id}>
              <PricingCard
                name={pricingData.name}
                price={pricingData.price}
                description={pricingData.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
