import React from "react";
import img from "../assets/Group 124.png";
const Dashboard = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between h-16">
        <div className="flex justify-center mt-3 ml-5 gap-9">
          <div className="font-serif text-2xl text-indigo font-bold leading-10 text-left">
            DENAURLEN
          </div>
          <div className="text-2xl mt-[2px] font-medium text-gray-600">
            Categories
          </div>
        </div>
        <div className="flex justify-center mt-[14px] mr-4 items-center h-8   rounded-3xl bg-indigo text-white">
          <img src={img} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
