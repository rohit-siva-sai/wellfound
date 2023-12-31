import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-950  py-12 px-4 md:px-48  ">
      <div className="flex md:flex-row flex-col  md:justify-between justify-center md:space-y-0  space-y-8 ">
        <Link href={"/"}>
          <picture>
            <img
              src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/64629216e7489c82412a194a_Primary%20Logo%20-%20Black.svg"
              alt=""
              className="w-40"
            />
          </picture>
        </Link>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-x-14 md:gap-y-0 gap-y-10 gap-x-4">
          <div className="flex flex-col space-y-2">
            <p className="text-lg pb-2 text-white">For Candidates</p>
            <Link href={""}>
              <p className="text-sm   text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Overview
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                startup Jobs
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Web3 Jobs
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Featured
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Salary Calaculator
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Startup hiring Data
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Tech Startups
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Remote
              </p>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-lg text-white pb-2">For Recruiters</p>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
                Overview
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Recruit Pro
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Curated
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              RecruiterCloud
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Hire Developers
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Pricing
              </p>
            </Link>
           
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-lg pb-2 text-white">Company</p>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              About
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              AngelList Venture
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Help
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Blog
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Terms & Risks
              </p>
            </Link>
            <Link href={""}>
              <p className="text-sm text-slate-200 font-semibold hover:text-rose-600 hover:underline decoration-rose-600">
              Privacy & Cookies
              </p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
