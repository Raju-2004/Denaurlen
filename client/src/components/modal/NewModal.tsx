import { CiLock } from "react-icons/ci";
import Input from '../Input';
import { useState } from "react";
import { useAppSelector } from "../utils/AppStore";

interface Props {
  closeModal : () => void
  openSuccessModal : () => void
  setData: (data: any[]) => void;
}
const NewModal = ({ closeModal,openSuccessModal,setData }: Props) => {

  const Email = useAppSelector((state) => state.email.email);

  const [FormData,SetFormData] = useState({
    Password : '',
    ConfirmPassword : ''
  })

  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const onHandleSubmit = () => {
    fetch('http://localhost:4000/changepassword',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({Email,Password:FormData.Password})
    })
    .then((res)=>{
      if(res.ok){
        openSuccessModal()
        setData(["password", "Changed"]);
      }
      else{

      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetFormData({...FormData, [name]: value });

    if (name === "ConfirmPassword" && value !== FormData.Password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-10 px-8 w-[435px] h-[312px] rounded-lg">
        <h2 className="text-2xl font-bold text-indigo">CREATE NEW PASSWORD</h2>
        <Input type={"text"} placeholder={"Password"} name={"Password"} icon={CiLock} handleChange={handleChange}/>
        <Input type={"text"} placeholder={"ConfirmPassword"} name={"ConfirmPassword"} icon={CiLock} handleChange={handleChange}/>
        {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}
        <div className="flex justify-between mt-4">
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
