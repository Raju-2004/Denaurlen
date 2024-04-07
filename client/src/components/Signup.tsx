import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { Form, Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Input from "./Input";

const Signup = () => {

    const [FormData,SetFormData] = useState({
        FirstName : '',
        LastName : '',
        Email : '',
        UserName : '',
        Password : '',
        ConfirmPassword : ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        SetFormData({...FormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(FormData.Password !== FormData.ConfirmPassword)
            {
                console.log('Passwords are not matching')
            }
        console.log(FormData)
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="mt-12">
        <div className="flex justify-between gap-5 w-96">
        <Input type={"text"} placeholder={"FirstName"} name={"FirstName"} icon={IoPerson} handleChange={ handleChange}/>
        <Input type={"text"} placeholder={"LastName"} name={"LastName"} icon={IoPerson} handleChange={ handleChange}/>
        </div>
        {/* <Input type={"email"} placeholder={"Email"} name={"Email"} icon={MdOutlineAlternateEmail} handleChange={ handleChange}/> */}
        <div className='flex items-center relative w-96  rounded mt-4'>
            <MdOutlineAlternateEmail className="absolute top-3 left-2 w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
            <input
                type='email'
                className="w-full h-12 pl-10 border rounded-sm outline-indigo bg-light_gray focus:bg-white"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                required
            />
        </div>
        <Input type={"text"} placeholder={"Username"} name={"UserName"} icon={IoPerson} handleChange={ handleChange}/>
        <Input type={"text"} placeholder={"Password"} name={"Password"} icon={CiLock} handleChange={ handleChange}/>
        <Input type={"text"} placeholder={"ConfirmPassword"} name={"confirmPassword"} icon={CiLock} handleChange={ handleChange}/>

        <div className="flex w-96 my-5 gap-2">
          <div className="flex gap-2">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Accept Terms & Conditions.</label>
          </div>
          <Link
            to="#"
            className="text-indigo cursor-pointer"
          >
            ClickHere
          </Link>
        </div>
        <div className="flex justify-center items-center w-96 p-3 mt- text-lg bg-indigo text-white rounded-lg">
          <button className="w-full h-full" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-1 w-96">
        <p>Already a member of Denaurlen?</p>
        <Link to='/auth/signin' className="text-indigo">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
