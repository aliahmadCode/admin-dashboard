import { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TbBellFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
function Header() {
  return (
    <>
      <div className="lg:flex lg:w-[100%] lg:justify-between py-4 px-4">
        <div className="flex mt-1 relative justify-center sm:hidden lg:flex lg:w-[400px] lg:justify-start">
          <input
            type="text"
            className="w-[95%] flex placeholder:items-center lg:w-[400px] bg-white shadow-md py-2 px-4 rounded-full pr-10"
            placeholder="Search..."
          />
          <div className="absolute right-6 top-2 text-[23px] cursor-pointer ">
            <IoSearchOutline />
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="flex mr-3 gap-3">
            <TbBellFilled className="bg-[#fefffe] text-[#528476] px-2 py-1 rounded-full text-[35px] shadow-md" />
            <RiSettings3Fill className="bg-[#fefffe] text-[#528476] px-2 py-1 rounded-full text-[35px] shadow-md" />
            <img
              className="w-[35px] h-[35px] rounded-full shadow-md"
              src="/user.webp"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
