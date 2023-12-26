import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-24 py-2">
      <Link href={"/"}>
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-3xl italic font-mono">Workera</p>
        </div>
      </Link>
      <div className="flex items-center space-x-6">
        <div className="font-semibold text-white bg-emerald-600 w-fit px-10 py-2 border hover:shadow cursor-pointer">
          Sign up
        </div>
        <div className="font-semibold text-black w-fit px-10 py-2 border hover:shadow cursor-pointer">
          Request demo
        </div>
      </div>
    </div>
  );
};

export default Navbar;
