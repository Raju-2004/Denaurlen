import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Input from '../Input';
import { useState } from "react";

interface Props {
  closeModal : () => void
  openSuccessModal : () => void
}
const NewModal = ({ closeModal,openSuccessModal }: Props) => {

  const [FormData,SetFormData] = useState({
    Password : '',
    ConfirmPassword : ''
  })

  const onHandleSubmit = () => {
    closeModal()
    openSuccessModal()
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    SetFormData({...FormData, [e.target.name]: e.target.value })
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-10 px-8 w-[435px] h-[312px] rounded-lg">
        <h2 className="text-2xl font-bold text-indigo">CREATE NEW PASSWORD</h2>
        <Input type={"text"} placeholder={"Password"} name={"Password"} icon={CiLock} handleChange={handleChange}/>
        <Input type={"text"} placeholder={"ConfirmPassword"} name={"ConfirmPassword"} icon={CiLock} handleChange={handleChange}/>
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

export default NewModal
