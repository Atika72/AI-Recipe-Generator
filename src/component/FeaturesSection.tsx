import Image from "next/image";
import React from "react";
import { IoSparkles } from "react-icons/io5";

interface FeatureInterface {
  image: string;
  name: string;
  description: string;
}

const FeatureSectionCard = ({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="p-6">
      <div className="rounded-2xl overflow-hidden transition-all duration-1000 hover:shadow-[0_10px_20px_rgba(20,_184,_166,_1)]">
        <div className="p-8">
          <Image
            src={image}
            alt="ai"
            height={60}
            width={60}
            className="mb-10"
          />
          <h3 className="text-slate-900 text-2xl font-semibold mb-3">{name}</h3>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      image: "/images/feature-1.png",
      name: "AI Integration",
      description:
        "Seamlessly integrate your preferences, dietary needs, and available ingredients for a fully personalized meal plan.",
    },
    {
      image: "/images/feature-2.png",
      name: "Chef AI",
      description:
        "Your virtual culinary expert, offering step-by-step instructions and smart cooking tips for every dish.",
    },
    {
      image: "/images/feature-3.png",
      name: "Meal Customizer",
      description:
        "Tailor every recipe to suit your taste, dietary restrictions, and portion sizes with ease.",
    },
    {
      image: "/images/feature-4.png",
      name: "Nutrient Tracker",
      description:
        "Track the nutritional value of your meals and get insights into calories, macros, and healthy alternatives.",
    },
    {
      image: "/images/feature-5.png",
      name: "AI's Latest Picks",
      description:
        "Discover trending and seasonally inspired recipes curated by AI, bringing you the latest in culinary creativity.",
    },
    {
      image: "/images/feature-6.png",
      name: "Perfectly Paired Flavours",
      description:
        "Enjoy expertly matched sides, drinks, and seasonings to enhance the flavor of every dish you prepare.",
    },
  ];
  return (
    <>
      <div className="p-6 flex flex-col justify-center items-center text-center gap-3 pt-20">
        <button className="bg-rose-500 px-4 py-2 rounded-full text-white text-center">
          <IoSparkles className="text-white inline-block mx-1" size={15} />
          Main Features
        </button>
        <h1 className="text-4xl font-semibold text-gray-700">
          Main Features OF AI Tool{" "}
        </h1>
        <span className="text-base">
          A Complete AI-Powered Solution for Your Taste Buds
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto pt-5">
        {features.map((featuresData: FeatureInterface, i) => (
          <FeatureSectionCard
            key={i}
            image={featuresData.image}
            name={featuresData.name}
            description={featuresData.description}
          />
        ))}
      </div>
    </>
  );
}
