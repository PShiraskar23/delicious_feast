import React from "react";
import { IoIosStar } from "react-icons/io";
import Counter from "./counter";

const FoodCard = ({ item }) => {
  item = { ...item, qty: 0 };

  return (
    <div className=" w-[260px] h-[320px] m-3 rounded-xl shadow-xl border border-slate-200">
      <div>
        <img
          src={item?.img}
          alt="pizza"
          className="w-[270px] h-[160px] object-fill rounded-xl p-3 hover:scale-95 cursor-pointer transition-all duration-300"
        />
      </div>
      <div className="px-3">
        <div className="flex justify-between my-1">
          <p className="font-bold text-md h-12 ">{item?.name}</p>
          <p className="h-6 flex items-center  gap-1 text-sm bg-green-600 text-white px-1 rounded-md">
            {item?.rating} <IoIosStar className="fill-white-400" />
          </p>
        </div>
        <p className="font-medium text-sm">
          {" "}
          {item.desc?.length > 60 ? `${item.desc.slice(0, 60)}...` : item.desc}
        </p>
        <div className="flex justify-between m-3">
          <p className="text-xl font-semibold text-green-500">
            ₹ {item?.price}
          </p>
          <Counter item={item && item} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
