import React, { useState } from "react";
import { data } from "../foodData.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //   filter by category
  const filterByCategory = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category.toLowerCase() === category.toLowerCase();
      })
    );
  };

  //   filter by price
  const filterByPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price == price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              All
            </button>
            <button
              onClick={() => filterByCategory("chicken")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              Chicken
            </button>
            <button
              onClick={() => filterByCategory("pizza")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              Pizza
            </button>
            <button
              onClick={() => filterByCategory("salad")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              Salads
            </button>
            <button
              onClick={() => filterByCategory("burger")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              Burger
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterByPrice("$")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              $
            </button>
            <button
              onClick={() => filterByPrice("$$")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              $$
            </button>
            <button
              onClick={() => filterByPrice("$$$")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              $$$
            </button>
            <button
              onClick={() => filterByPrice("$$$$")}
              className="m-1 border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={food.image}
                alt={food.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{food.name}</p>
                <p>
                  <span className="bg-orange-400 text-white p-1 rounded-full">
                    {food.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
