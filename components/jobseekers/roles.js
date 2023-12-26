import Link from "next/link";
import React from "react";
const array = [
  {
    name: "Frontend Devloper(Basic)",
    link: "",
  },
  {
    name: "Software Engineer",
    link: "",
  },
  {
    name: "Software Engineer Intern",
    link: "",
  },
  {
    name: "Java(Basic)",
    link: "",
  },
  {
    name: "Javascript (Intermediate)",
    link: "",
  },
  {
    name: "Javascript (Basic)",
    link: "",
  },
];

const Roles = () => {
  return (
    <div className="px-24 py-12 flex flex-col space-y-8">
      <p className="font-bold text-lg text-gray-800">Get your Roles Certified</p>
      <div className="grid grid-cols-3 gap-y-10 gap-x-16">
        {array.map((item) => {
          return (
            <div className="border hover:shadow hover:scale-105 duration-300 px-6 py-8 transition-all flex flex-col space-y-8 rounded">
              <p className="font-semibold text-2xl text-gray-800">{item.name}</p>
              <Link href={item.link}>
                <div className="px-2 py-1 w-fit bg-gray-300 font-semibold hover:shadow rounded">
                  Get certified
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roles;
