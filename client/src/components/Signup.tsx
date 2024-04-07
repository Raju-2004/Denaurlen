import React from "react";
import { IoPerson } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
interface Props {
  isFocused: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
  openForgotModal: () => void;
}
const Signup = ({
  isFocused,
  handleFocus,
  handleBlur,
  openForgotModal,
}: Props) => {
  return (
    <div>
      <form action="" className="mt-14">
        <div className="flex justify-between gap-5 w-96">
          <div
            className={`flex items-center p-3 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded`}
          >
            <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              name="firstname"
              placeholder="firstname"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={`flex items-center p-3 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded`}
          >
            <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none"
              name="lastname"
              placeholder="lastname"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div
          className={`flex items-center p-3 w-96 bg-${
            isFocused ? "white" : "light_gray"
          } border border-${isFocused ? "indigo" : "gray-300"} rounded mt-4`}
        >
          <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
          <input
            type="email"
            className="w-full bg-transparent focus:outline-none"
            name="Email"
            placeholder="Email"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
           <a href="" className="text-indigo">Verify</a>
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
            name="location"
            placeholder="Location"
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
            name="username"
            placeholder="username"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex justify-between gap-5 w-96 mt-4">
          <div
            className={`flex items-center p-3 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded`}
          >
            <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="password"
              className="w-full bg-transparent focus:outline-none"
              name="password"
              placeholder="Password"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div
            className={`flex items-center p-3 bg-${
              isFocused ? "white" : "light_gray"
            } border border-${isFocused ? "indigo" : "gray-300"} rounded`}
          >
            <IoPerson className="w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
              type="password"
              className="w-full bg-transparent focus:outline-none"
              name="password"
              placeholder="Re-Enter"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="flex w-96 my-5 gap-2">
          <div className="flex gap-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Accept Terms & Conditions.</label>
          </div>
          <a
            href="#"
            className="text-indigo cursor-pointer"
          >
            ClickHere
          </a>
        </div>
        <div className="flex justify-center items-center w-96 p-3 mt- text-lg bg-indigo text-white rounded-lg">
          <button className="w-full h-full" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-center w-96">
        <p>Already a member of Denaurlen?</p>
        <a href="">Sign In</a>
      </div>
    </div>
  );
};

export default Signup;
