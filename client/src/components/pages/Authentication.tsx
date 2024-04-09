import { useState } from "react";
import Image from "../../assets/04 Login-SignUp 1.png";
import { Outlet, useLocation} from "react-router-dom";
import ForgotModal from "../modal/ForgotModal";
import NewModal from "../modal/NewModal";
import OtpModal from "../modal/OtpModal";
import Success from "../modal/Success";
import CoinModal from "../modal/CoinModal";

interface Props {
  openModal: (modalType: "forgot" | "new" | "otp" | "success" | "coin") => void;
  closeModal: () => void;
  isModalOpen: "forgot" | "new" | "otp" | "success" | "coin" | null;
}
const Authentication = ({openModal,closeModal,isModalOpen}:Props) => {

  const location = useLocation()
  const [dataForSuccess, setDataForSuccess] = useState<any[]>([]);
  

  const setOtpModalData = (data: any[]) => {
    setDataForSuccess(data);
  };


  return (
    <div className="grid grid-cols-2">
      <div className="px-36 mt-8">
        <div>
          <p className="text-3xl text-indigo font-bold leading-6 text-left">
            {location.pathname === '/auth/signin' ? "Sign In":'Sign Up'}
          </p>
          <p className="font-medium mt-3 text-2xl text-gray-400">
            Connect & Collect..!
          </p>
        </div>
        <Outlet/>
        <div className="w-96 mt-16 flex-col justify-center items-center">
            <p className="text-indigo text-center cursor-pointer">Privacy Policy</p>
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
      {isModalOpen === 'forgot' && (<ForgotModal closeModal={closeModal} openOtpModal = {() => openModal("otp")}/>)}
      {isModalOpen === 'new' && (<NewModal closeModal={closeModal} openSuccessModal={() => openModal("success")} setData={setOtpModalData}/>)}
      {isModalOpen === 'otp' && (<OtpModal closeModal={closeModal} openNewModal={() => openModal('new')} openSuccessModal={() => openModal("success")} setData={setOtpModalData} />)}
      {isModalOpen === 'success' && (<Success closeModal={closeModal} data={dataForSuccess}/>)}
      {isModalOpen === 'coin' && <CoinModal closeModal={closeModal}/>}
    </div>
  );
};

export default Authentication;
