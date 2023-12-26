import React from "react";

const Current = () => {
  return (
    <div className="flex flex-col space-y-12 items-center py-24 px-24">
      <p className="font-semibold text-4xl text-gray-900 ">Where startups and job seekers connect</p>
      <div className="flex space-x-8">
        <div className="px-10 w-fit text-white bg-black text-lg font-semibold hover:shadow-black py-3 border cursor-pointer shadow rounded-lg">
          Find your next hire
        </div>
        <div className="px-10 w-fit text-lg font-semibold hover:shadow-black py-3 border cursor-pointer shadow rounded-lg">
          Find your next job
        </div>
      </div>
    </div>
  );
};

export default Current;
