import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

interface Props {
  closeModal: () => void;
  openOtpModal : () => void
}

const ForgotModal = ({ closeModal,openOtpModal }: Props) => {

  const onHandleSubmit = () => {
    closeModal()
    openOtpModal()
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-10 px-8 rounded-lg">
        <h2 className="text-2xl font-bold text-indigo">FORGOT PASSWORD?</h2>
        <p className="font-medium text-lg mb-3 text-gray-400">
          No worries we covered you..!
        </p>
        <div
          className={`flex items-center p-3 w-96 bg-white border border-indigo rounded my-6`}
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
          <button
            onClick={closeModal}
            className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onHandleSubmit}
            className="w-44 h-12  flex justify-center items-center  hover:bg-indigo bg-light_gray hover:text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotModal;
