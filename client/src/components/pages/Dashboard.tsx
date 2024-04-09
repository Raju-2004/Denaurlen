import { useEffect, useState } from "react";
import img from "../../assets/Group 124.png";
import img1 from "../../assets/Frame.svg";
import img2 from '../../assets/Ellipse 31.png'
import img3 from '../../assets/Ellipse 32.png'
import img4 from '../../assets/Ellipse 33.png'
import img5 from '../../assets/Ellipse 34.png'
import img6 from '../../assets/Ellipse 38.png'
import img7 from '../../assets/Ellipse 39.png'
import Account from "../Account";
import { useNavigate } from "react-router-dom";
import { notifyWarn } from "../Config/toastConfig";
import { useCookies } from 'react-cookie';
const Dashboard = () => {

  const [categories] = useState([
    { img: img2, text: "emma_watson" , username:"Emma Watson" },
    { img: img3, text: "pooja_hegde" ,username:"Pooja Hegde" },
    { img: img4, text: "eminem" ,username:"Marshal Mathers" },
    { img: img5, text: "akshaykumar" ,username:"Akshay Kumar" },
    { img: img6, text: "gany_varma" ,username:"Ganesh Verma" },
    { img: img7, text: "kiran_katore" ,username:"Kiran Katore" },
  ]);
  const [cookies] = useCookies(['userAuth']); // Read the cookie named 'userAuth'
  const userEmail = cookies.userAuth;
  const navigate = useNavigate();
  console.log(userEmail);
  useEffect(() => {
    if (!userEmail) {
      navigate("/auth/signin");
      notifyWarn("You must log in"); 
    }
  }, [userEmail, navigate]);
  return (
    <div className="h-[100vh]">
      <div className="flex justify-between h-16">
        <div className="flex justify-center mt-3 ml-5 gap-9">
          <div className="font-serif text-2xl text-indigo font-bold leading-10 text-left">
            DENAURLEN
          </div>
          <div className="text-2xl mt-[2px] font-medium text-gray-600">
            Categories
          </div>
        </div>
        <div className="flex justify-center mt-[14px] mr-4 items-center h-8   rounded-3xl bg-indigo text-white">
          <img src={img} className="h-full" alt="" />
        </div>
      </div>
      <div className="bg-light_gray grid grid-cols-2">
        <div className=" mt-20">
          <div className="flex justify-center items-center">
          <img src={img1} className="w-72 mr-22" alt="" />
          </div>
          <div className="mt-7 text-center font-semibold ">
            <p className="leading-9">“Good company in a journey makes the way seems shorter.”</p>
            <p className="ml-[310px]">- Izzak Walton</p>
          </div>
        </div>
        <div className="mt-14 bg-white px-20 py-9">
          {categories.map((c) => (
            <Account img={c.img} text = {c.text} username={c.username}/>
          ))}
          <div className="flex-col  ml-72 ">
            <div className="mb-3">
              <button className="shadow-sm w-20 h-8 bg-indigo text-white rounded-lg">
                Next
              </button>
            </div>
            <div>
              <button className="shadow-sm w-20 h-8 text-indigo">Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
