import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />{" "}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-xxl px-2">
          Food <span className="font-bold"> Cart </span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm ">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[170px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 px-3 rounded-full">
        <BsFillCartFill size={30} className="mr-2 cursor-pointer" /> Cart
      </button>

      {/* mobile design */}
      {/* overlay */}
      {nav ? (
        <div className="lg:bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : null}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="cursor-pointer absolute right-4 top-4 "
        />
        <h1 className="text-2xl p-4 cursor-pointer">
          Food <span className="font-bold"> Cart </span>
        </h1>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>

            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <MdFavorite size={25} className="mr-4" /> Favourite
            </li>

            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>

            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <AiFillTag size={25} className="mr-4" /> Offers / Promotions
            </li>

            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <MdHelp size={25} className="mr-4" /> Help
            </li>

            <li className="text-xl py-4 flex items-center cursor-pointer">
              {" "}
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
