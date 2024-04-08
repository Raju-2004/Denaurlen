import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

interface Props {
  closeModal: () => void;
  openOtpModal : () => void
}

const ForgotModal = ({ closeModal,openOtpModal }: Props) => {

  const onHandleSubmit = () => {
    closeModal()
    /* openOtpModal() */
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-10 px-8 w-675 h-512 rounded-lg">
        <h2 className="text-2xl font-bold text-indigo">FORGOT PASSWORD?</h2>
        <p className="font-medium text-lg mb-3 text-gray-400">
          No worries we covered you..!
        </p>
        <div
          className={`flex items-center w-96 relative rounded my-6`}
        >
          <MdOutlineAlternateEmail className="absolute top-3 left-2 w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
          <input
            type="email"
            className="w-full h-12 pl-10 border rounded-sm outline-indigo bg-light_gray focus:bg-white"
            name="email"
            placeholder="email"
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
