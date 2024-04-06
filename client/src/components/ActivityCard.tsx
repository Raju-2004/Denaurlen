import React from "react";

interface Props {
  number: number;
  text: string;
  image: string;
}
const ActivityCard = ({ number, text, image }: Props) => {
  return (
    <div className="flex-col justify-center items-center">
      <div className="flex gap-4 ml-10 py-3">
        <div className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-gray-800 bg-light_gray border-dashed">
          {number}
        </div>
        <div className="font-lato text-lg font-semibold leading-9 text-left">
          {text}
        </div>
      </div>
      <img className="h-72 my-2 ml-4" src={image}  alt={`Activity ${number}`} />
    </div>
  );
};

export default ActivityCard;
