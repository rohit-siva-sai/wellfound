import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 px-24">
     <Link href={"/"}>
     <picture>
        <img
          src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a470_Primary%20Logo%20-%20Black.svg"
          alt=""
          className="w-48"
        />
      </picture>
     </Link>
      <div className="flex space-x-12">
        <Link href={""}>
          <div className="font-semibold  hover:text-gray-500">Discover</div>
        </Link>
        <Link href={""}>
          <div className="font-semibold  hover:text-gray-500">
            For job seekers
          </div>
        </Link>
        <Link href={""}>
          <div className="font-semibold  hover:text-gray-500">
            For Companies
          </div>
        </Link>
      </div>
      <div className="flex space-x-6">
        <div className="px-4 font-semibold hover:shadow-black py-1 border cursor-pointer shadow rounded-lg">
          Login
        </div>
        <div className="px-4  bg-gray-800 text-white font-semibold hover:shadow-black py-1 border cursor-pointer shadow rounded-lg">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
