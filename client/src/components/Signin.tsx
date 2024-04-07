import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import Input from "./Input";
interface Props {
  openForgotModal: () => void;
}
const Signin = ({ openForgotModal }: Props) => {

  const [FormData,SetFormData] = useState({
    UserName : '',
    Password : ''
})

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    SetFormData({...FormData, [e.target.name]: e.target.value })
}
  return (
    <div>
      <form action="" className="mt-14">
        <Input type={"text"} placeholder={"Username"} name={"UserName"} icon={IoPerson} handleChange={handleChange}/>
        <Input type={"text"} placeholder={"Password"} name={"Password"} icon={CiLock} handleChange={handleChange}/>
        <div className="flex w-96 my-5 justify-between">
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remainder Me</label>
          </div>
          <Link
            to="#"
            className="text-indigo cursor-pointer"
            onClick={openForgotModal}
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex justify-center items-center w-96 p-3 mt-10 text-lg bg-indigo text-white rounded-lg">
          <button className="w-full h-full" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="mt-3 flex justify-center gap-2 items-center w-96">
        <span className="w-44 h-[2px] bg-gray-300"></span>
        <div className="text-1xl">OR</div>
        <span className="w-44 h-[2px] bg-gray-300"></span>
      </div>
      <div className="flex justify-center items-center w-96 p-3 my-4 text-lg border border-gray-300 rounded-lg">
        <button className="w-full h-full ">Sign in With Google</button>
      </div>
      <div className="flex justify-center w-96">
        <p>Are you new to Denaurlen?</p>
        <Link to="/auth/signup" className="text-indigo">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
