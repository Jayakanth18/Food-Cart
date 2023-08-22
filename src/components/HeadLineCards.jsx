import React from "react";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* cards */}
      {/* 1 */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-2">Biryani</p>
          <p className="px-2">All Variety</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5 hover:bg-orange-400 hover:border-black duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="biryani"
        />
      </div>

      {/* 2 */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-2">Thali</p>
          <p className="px-2">Unlimitted</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5 hover:bg-orange-400 hover:border-black duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="meals"
        />
      </div>

      {/* 3 */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="text-2xl font-bold px-2 pt-2">Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-5 hover:bg-orange-400 hover:border-black duration-300">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover"
          src="https://images.pexels.com/photos/5350676/pexels-photo-5350676.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="biryani"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
