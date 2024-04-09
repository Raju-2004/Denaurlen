import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import { notifyError, notifySuccess, notifyWarn } from "./Config/toastConfig";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "./store/AppStore";
import { setEmail } from "./store/EmailSlice";
import { setLoad } from "./store/LoadSlice";
import { TiTick } from "react-icons/ti";
import Spinner from "./Spinner";

interface Props {
  openOtpModal: () => void;
  openCoinModal: () => void;
}

const Signup = ({ openOtpModal, openCoinModal }: Props) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const dispatch = useAppDispatch();
  const isVerify = useAppSelector((state) => state.Verify.isVerify);
  const isLoad = useAppSelector((state) => state.Load.isLoad);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  const [FormData, SetFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Terms: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetFormData({ ...FormData, [name]: value });

    let emailErrorMessage = "";
    let passwordErrorMessage = "";
    let ConfirmErrorMessage = "";

    if (name === "Email") {
      const isValidEmail = emailRegex.test(value);
      emailErrorMessage = isValidEmail ? "" : "Invalid email";
    }

    if (name === "Password") {
      const isValidPassword = passwordRegex.test(value);
      passwordErrorMessage = isValidPassword
        ? ""
        : "Password should contain at least 6 characters";
    }

    if (name === "ConfirmPassword" && value !== FormData.Password) {
      ConfirmErrorMessage = "Passwords do not match";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      Email: emailErrorMessage,
      Password: passwordErrorMessage,
      ConfirmPassword: ConfirmErrorMessage,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isVerify) {
      console.log("Please verify your email before submitting the form.");
      return;
    }
    if (!FormData.UserName) {
      notifyError("Please enter a username");
      return;
    }
    const passwordsMatch = FormData.Password === FormData.ConfirmPassword;
    const isValidEmail = emailRegex.test(FormData.Email);
    const isValidPassword = FormData.Password.length >= 6;
    if (!isValidEmail || !isValidPassword || !passwordsMatch) {
      console.log("Please correct the validation errors before submitting.");
      return;
    }
    if (!isTermsAccepted) {
      // Check if terms are accepted
      setErrors((prevErrors) => ({
        ...prevErrors,
        Terms: "Please accept terms & conditions",
      }));
      return;
    }
    console.log(FormData);
    fetch(serverUrl + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(Response);
        console.log(data);
        if(data.message === 'UserName or email already exists')
          {
            notifyWarn('user already Exists');
          }
        if (data.message === "User created successfully") {
          openCoinModal();
          notifySuccess("Sign up Successful");
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const onVerifyClick = () => {
    const isValidEmail = emailRegex.test(FormData.Email);
    if (!isValidEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        Email: "Please enter a valid email address.",
      }));
      return;
    }
    dispatch(setLoad({ isLoad: true }));
    dispatch(setEmail({ email: FormData.Email }));
    console.log("sending mail");
    fetch(serverUrl + "sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: FormData.Email }),
    })
      .then((response) => response.json())
      .then((data) => {
        openOtpModal();
        /* setEmailVerified(true) */

        console.log(data); // Handle response data as needed
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
      .finally(() => {
        dispatch(setLoad({ isLoad: false }));
      });
  };

  const handleTermsCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsTermsAccepted(e.target.checked);
    setErrors((prevErrors) => ({
      ...prevErrors,
      Terms: "",
    }));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="mt-12">
        <div className="flex justify-between gap-5 w-96">
          <Input
            type={"text"}
            placeholder={"FirstName"}
            name={"FirstName"}
            icon={IoPerson}
            handleChange={handleChange}
          />
          <Input
            type={"text"}
            placeholder={"LastName"}
            name={"LastName"}
            icon={IoPerson}
            handleChange={handleChange}
          />
        </div>
        {/* <Input type={"email"} placeholder={"Email"} name={"Email"} icon={MdOutlineAlternateEmail} handleChange={ handleChange}/> */}
        <div className="flex items-center relative w-96  rounded mt-4">
          <MdOutlineAlternateEmail className="absolute top-3 left-2 w-6 h-6 p-1 bg-indigo text-white mr-2 rounded-sm" />
          <input
            type="email"
            className="w-full h-12 pr-12 pl-10 border rounded-sm outline-indigo bg-light_gray focus:bg-white"
            name="Email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Link
            to=""
            onClick={onVerifyClick}
            className="absolute cursor-pointer top-3 text-1xl right-2 text-indigo"
          >
            {isVerify ? (
              <>
                <TiTick className="inline-block text-green-500 w-5 h-5 ml-1" />
              </>
            ) : isLoad ? (
              <Spinner />
            ) : (
              <>Verify</>
            )}
          </Link>
        </div>
        {errors.Email && <span className="text-red-500">{errors.Email}</span>}
        {formSubmitted && !isVerify && (
          <span className="text-red-500">
            Please verify your email before submitting the form.
          </span>
        )}
        <Input
          type={"text"}
          placeholder={"UserName"}
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
        {errors.Password && (
          <span className="text-red-500">{errors.Password}</span>
        )}
        <Input
          type={"password"}
          placeholder={"ConfirmPassword"}
          name={"ConfirmPassword"}
          icon={CiLock}
          handleChange={handleChange}
        />
        {errors.ConfirmPassword && (
          <span className="text-red-500">{errors.ConfirmPassword}</span>
        )}
        <div className="flex flex-col w-96 my-5 gap-1">
          <div className="flex gap-2">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleTermsCheckboxChange}
              />
              <label htmlFor="checkbox">Accept Terms & Conditions.</label>
            </div>
            <Link to="#" className="text-indigo cursor-pointer">
              ClickHere
            </Link>
          </div>
          {errors.Terms && <span className="text-red-500">{errors.Terms}</span>}
        </div>
        {/* Error message for terms and conditions */}
        <div className="flex justify-center items-center w-96 p-3 mt- text-lg bg-indigo text-white rounded-lg">
          <button className="w-full h-full" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex  gap-2 justify-center mt-1 w-96">
        <p>Already a member of Denaurlen?</p>
        <Link to="/auth/signin" className="text-indigo">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
