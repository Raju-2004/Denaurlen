import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { useNavigate, Link } from "react-router-dom";
import { notifyError, notifySuccess, notifyWarn } from "./Config/toastConfig";
import Input from "./Input";
import img from '../assets/search 1.svg'
import { useCookies } from 'react-cookie';

interface Props {
  openForgotModal: () => void;
}
const Signin = ({ openForgotModal }: Props) => {

  const [cookies, setCookie] = useCookies(['userAuth'])
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();
  const [FormData, SetFormData] = useState({
    UserName: "",
    Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FormData.UserName.trim()) {
      notifyWarn("username is required");
      return;
    }
    if (!FormData.Password.trim()) {
      notifyWarn("password is required");
      return;
    }
    fetch(serverUrl+"login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then(async(res) => {
        const response = await res.json(); 
        console.log(response);
        if(res.ok)
        {
          const token = response.token;
          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          console.log(decodedToken.id); 
          notifySuccess(response.message)
          setCookie('userAuth', decodedToken.id, { path: '/' });
          navigate('/categories')
        }
        else{
          notifyError(response.message)
        }
      })
      .catch((error) => {
        console.error("Error logging user:", error);
      });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="mt-14">
        <Input
          type={"text"}
          placeholder={"Username"}
          name={"UserName"}
          icon={IoPerson}
          handleChange={handleChange}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"Password"}
          icon={CiLock}
          handleChange={handleChange}
        />
        <div className="flex w-96 my-5 justify-between">
          <div>
            <input className="mr-1" type="checkbox" id="checkbox" />
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
      <div className="flex justify-center gap-2 items-center w-96 py-3 my-4 text-lg border border-gray-300 rounded-lg">
        <img src={img} alt="" />
        <button>Sign in With Google</button>
      </div>
      <div className="flex gap-2 justify-center w-96">
        <p>Are you new to Denaurlen?</p>
        <Link to="/auth/signup" className="text-indigo">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
