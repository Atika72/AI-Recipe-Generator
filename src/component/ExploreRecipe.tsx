import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

interface RecipeInterface {
  image: string;
  name: string;
}

const RecipeCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="p-6 rounded-full flex flex-col items-center transform transition duration-300 hover:scale-105">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <Image
          src={image}
          width={400}
          height={400}
          alt={name}
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 text-xl font-semibold text-gray-800">{name}</h3>
    </div>
  );
};

export default function ExploreRecipe() {
  const recipes = [
    { image: "/images/pizza.jpg", name: "Pizza" },
    { image: "/images/pizza.jpg", name: "Burger" },
    { image: "/images/pizza.jpg", name: "Pasta" },
    { image: "/images/pizza.jpg", name: "Salad" },
    { image: "/images/pizza.jpg", name: "Cake" },
    { image: "/images/pizza.jpg", name: "Wrap" },
  ];

  return (
    <div className="p-6 pt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-700">
          Explore Recipes
        </h1>
        <button className="bg-rose-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-rose-600 transition">
          View all
          <FaArrowRightLong />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {recipes.map((recipeData: RecipeInterface, i) => (
          <RecipeCard key={i} image={recipeData.image} name={recipeData.name} />
        ))}
      </div>
    </div>
  );
}
