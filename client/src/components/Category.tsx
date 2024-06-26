import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/AppStore";
import { addCategory,removeCategory } from "./store/CategorySlice";
import { notifyWarn } from "./Config/toastConfig";

interface Props {
  img: string;
  text: string;
}
const Category = ({ img, text }: Props) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.category.items);
  const [selected, setSelected] = useState(false);
  console.log(items);
  const handleClick = () => {
    if (items.length === 10 && !selected) {
      notifyWarn('can select atmost 10')
      return;
    }
    setSelected(!selected);
    if (!selected) {
      dispatch(addCategory(text));
    } else {
      dispatch(removeCategory(text));
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col relative h-36 w-15 rounded-3xl justify-center items-center m-2 shadow-sm border border-${selected ?'indigo':'light_gray'}`}
    >
      <img className="h-[65px] w-fit" src={img} alt="" />
      <p className="text-center mt-2">{text}</p>
      {selected && (
        <div className="cursor-pointer absolute top-2 right-2 w-6 h-6 rounded-full text-white flex justify-center items-center bg-indigo">
          {items.indexOf(text)+1}
        </div>
      )}
    </div>
  );
};

export default Category;
