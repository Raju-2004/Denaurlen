import React, { useState } from "react";
import Image from "../assets/04 Login-SignUp 1.png";
import { Link } from "react-router-dom";
import ForgotModal from "./modal/ForgotModal";
import Signin from "./Signin";
import NewModal from "./modal/NewModal";
import OtpModal from "./modal/OtpModal";
import Signup from "./Signup";
import Success from "./modal/Success";
const Authentication = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<"forgot" | "new" | "otp" | "success" | null>(null);

  const openModal = (modalType : "forgot" | "new" | "otp" | "success") => {
    setIsModalOpen(modalType);
  };
  const closeModal = () => {
    setIsModalOpen(null);
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
        <Signin openForgotModal={() => openModal("forgot")} handleFocus={handleFocus} handleBlur={handleBlur} isFocused={isFocused}/>
        <div className="w-96 mt-16 flex-col justify-center items-center">
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
      {isModalOpen === 'forgot' && (
        <ForgotModal closeModal={closeModal} openOtpModal = {() => openModal("otp")}/>
      )}
      {isModalOpen === 'new' && (<NewModal closeModal={closeModal} openSuccessModal={() => openModal("success")}/>)}
      {isModalOpen === 'otp' && (<OtpModal closeModal={closeModal} openNewModal={() => openModal('new')}/>)}
      {isModalOpen === 'success' && (<Success closeModal={closeModal}/>)}
    </div>
  );
};

export default Authentication;
