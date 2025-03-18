// import Image from "next/image";
// import { FaArrowRightLong } from "react-icons/fa6";

// export default function ExploreRecipe() {
//   return (
//     <div>
//       <div className="flex justify-between">
//         <h1 className="text-3xl">Explore recipes</h1>
//         <button className="bg-rose-500 text-white px-6 py-3 rounded-md flex items-center gap-2">
//           View all
//           <FaArrowRightLong />
//         </button>
//       </div>
//       <div className="grid grid-cols-4 gap-4">
//         <div className="rounded-full bg-white">
//           <Image src={"/images/pizza.jpg"} width={100} height={100} alt="" />
//         </div>
//         <div className="rounded-full bg-white">
//           <Image src={"/images/pizza.jpg"} width={100} height={100} alt="" />
//         </div>
//         <div className="rounded-full bg-white">
//           <Image src={"/images/pizza.jpg"} width={100} height={100} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const RecipeCard = ({ image, name }: {image:string, name:string}) => {
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
    { image: "/images/pizza.jpg", name: "Salad" },
    { image: "/images/pizza.jpg", name: "Salad" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Explore Recipes</h1>
        <button className="bg-rose-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-rose-600 transition">
          View all
          <FaArrowRightLong />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} image={recipe.image} name={recipe.name} />
        ))}
      </div>
    </div>
  );
}
