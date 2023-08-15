import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsCartDash } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />{" "}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Food <span className="font-bold"> Cart </span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm ">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
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
      <div className="lg:bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
    </div>
  );
};

export default Navbar;
