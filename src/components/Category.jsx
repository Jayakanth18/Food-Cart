import React from "react";
import { categories } from "../foodData";

const Category = () => {
  // console.log(categories)
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {/* map */}
        {categories.map((item, index) => {
          //destructuring
          const { name: categoryName, image } = item;
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-2 flex justify-between items-center"
            >
              <h1 className="font-bold sm:text-xl">{categoryName}</h1>
              <img className="w-20" src={image} alt={categoryName} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
