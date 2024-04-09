import { useEffect, useState } from "react";
import Category from "../Category";
import img from "../../assets/Group 124.png";
import { useNavigate } from "react-router-dom";
import { notifyWarn } from "../Config/toastConfig";
import { useCookies } from 'react-cookie';
import {
  travelIcon,
  brandsIcon,
  artDesignIcon,
  booksIcon,
  gamesIcon,
  foodDrinksIcon,
  carsIcon,
  speciesIcon,
  colorsIcon,
  celebritiesIcon,
  songsIcon,
  healthIcon,
  sportsIcon,
  technologyIcon,
  travelIcon2,
  travelIcon3,
  travelIcon4,
  travelIcon5,
  travelIcon6,
  travelIcon7,
  travelIcon8,
  travelIcon9,
  travelIcon10,
  travelIcon11,
} from "../Config/Images";
import { Link } from "react-router-dom";

// import
const CategoryPage = () => {
  const [categories] = useState([
    { img: travelIcon, text: "Travel" },
    { img: brandsIcon, text: "Brands" },
    { img: artDesignIcon, text: "Art/Design" },
    { img: booksIcon, text: "Books" },
    { img: gamesIcon, text: "Games" },
    { img: foodDrinksIcon, text: "Food&Drinks" },
    { img: carsIcon, text: "Cars" },
    { img: speciesIcon, text: "Species" },
    { img: colorsIcon, text: "Colors" },
    { img: celebritiesIcon, text: "Celebrities" },
    { img: songsIcon, text: "Songs" },
    { img: healthIcon, text: "Health" },
    { img: sportsIcon, text: "Sports" },
    { img: technologyIcon, text: "Technology" },
    { img: travelIcon2, text: "Bikes" },
    { img: travelIcon3, text: "Web Series" },
    { img: travelIcon4, text: "Videos" },
    { img: travelIcon5, text: "Fashion" },
    { img: travelIcon6, text: "Memes" },
    { img: travelIcon7, text: "RoleModels" },
    { img: travelIcon8, text: "Interested" },
    { img: travelIcon9, text: "Photos" },
    { img: travelIcon10, text: "Quotes" },
    { img: travelIcon11, text: "Movies" },
  ]);

  const getTokenFromCookie = (): string | null => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ').reduce((acc: { [key: string]: string }, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  
    return cookies['token'] || null;
  };
  
  const token = getTokenFromCookie();

  console.log(token)
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
          <div className="text-2xl font-medium text-gray-600">Categories</div>
        </div>
        <div className="flex justify-center mt-[14px] mr-4 items-center h-8   rounded-3xl bg-indigo text-white">
          <img src={img} className="h-full" alt="" />
        </div>
      </div>
      <div className="">
        <div className="bg-lavender my-4 py-3 mx-20 text-center">
          Choose your top @10 categories
        </div>
        <div className="mx-20 grid grid-cols-8">
          {categories.map((category, index) => (
            <Category key={index} img={category.img} text={category.text} />
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <Link to="/dashboard" className="shadow-sm w-20 h-10 px-5 pt-2 bg-indigo text-white rounded-lg">Next</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
