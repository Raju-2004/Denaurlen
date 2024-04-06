import React, { useState } from "react";
import Image from "../assets/04 Login-SignUp 1.png";
import { IoPerson } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Authentication = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="grid grid-cols-2">
      <div className="px-36 mt-8">
        <div>
          <p className="text-3xl text-indigo font-bold leading-6 text-left">
            Sign In
          </p>
          <p className="font-medium mt-3 text-2xl text-gray-400">
            Connect & Collect..!
          </p>
        </div>
        <form action="" className="mt-14">
          <div
            className={`flex items-center p-3 w-96 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded`}
          >
            <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              name="username"
              placeholder="Username"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={`flex items-center p-3 w-96 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded mt-4`}
          >
            <CiLock className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              name="password"
              placeholder="Password"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex w-96 my-5 justify-between">
            <div>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remainder Me</label>
            </div>
            <a href="#" className="text-indigo cursor-pointer" onClick={openModal}>
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-center items-center w-96 p-3 mt-10 text-lg bg-indigo text-white rounded-lg">
            <button className="w-full h-full" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-3">or</div>
        <div className="flex justify-center items-center w-96 p-3 my-4 text-lg border border-gray-300 rounded-lg">
          <button className="w-full h-full ">Sign in With Google</button>
        </div>
        <div className="flex justify-center w-96">
          <p>Are you new to Denaurlen?</p>
          <a href="">Sign up</a>
        </div>
        <div className="w-96 mt-28 flex-col justify-center items-center">
            <p className="text-indigo text-center">Privacy Policy</p>
            <p>Denaurlen Copyright @ 2021, All Rights Reserved</p>
        </div>
      </div>
      <div className="py-0 bg-lavender h-[100vh]">
        <div className="ml-28 my-10">
          <p className="text-4xl text text-indigo font-bold">DENAURLEN</p>
          <p className="text-3xl py-5 text-h2 font-medium leading-6">
            Every dream has a demand..!
          </p>
        </div>
        <div className="px-20 py-6">
          <img src={Image} alt="Login-SignUp" />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white py-10 px-8 rounded-lg">
            <h2 className="text-2xl font-bold text-indigo">FORGOT PASSWORD?</h2>
            <p className="font-medium text-lg mb-3 text-gray-400">
              No worries we covered you..!
            </p>
            <div
            className={`flex items-center p-3 w-96 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded my-6`}
          >
            <MdOutlineAlternateEmail className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="email"
              className="w-full text-1xl bg-transparent focus:outline-none"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between">
            <button onClick={closeModal} className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg">Cancel</button>
            <button onClick={closeModal} className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg">Submit</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
