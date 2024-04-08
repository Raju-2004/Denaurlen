import React from "react";
import img from "../../assets/Group 173.png";
import { useNavigate } from "react-router-dom";

interface Props {
  closeModal: () => void;
}
const CoinModal = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    closeModal()
    navigate('/categories');
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex-col w-[435px] h-[312px] justify-center items-center relative bg-white p-12 rounded-lg">
        <div className="flex justify-center items-center">
          <img className="w-36" src={img} alt="" />
        </div>
        <div className="font-lato text-2xl mt-4 font-semibold ">
          <p>Congratulations</p>
          <p className="text-light_gray">You have earned 5000 U-Coins</p>
        </div>
        <div onClick={handleClick} className=" cursor-pointer absolute top-2 right-2 w-8 h-8 rounded-full text-white flex justify-center items-center bg-indigo ">X</div>
      </div>
    </div>
  );
};

export default CoinModal;
