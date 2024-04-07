import React from 'react'
import { IoPerson } from 'react-icons/io5';
import { CiLock } from 'react-icons/ci';

interface Props {
  isFocused: boolean;
  handleFocus: () => void;
  handleBlur: () => void;
  openForgotModal: () => void;
}
const Signin = ({
  isFocused,
  handleFocus,
  handleBlur,
  openForgotModal,
}: Props) => {
  return (
    <div>
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
            <a href="#" className="text-indigo cursor-pointer" onClick={openForgotModal}>
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
    </div>
  )
}

export default Signin
