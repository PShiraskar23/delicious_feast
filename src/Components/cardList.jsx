import React from "react";
import FoodCard from "./foodCard";
import foodData from "../foodData";
import { useSelector } from "react-redux";
import emptyImg from "../assets/empty.png";

const cardList = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const searchVal = useSelector((state) => state.search.search);
  return (
    <div className="flex flex-wrap gap-5 mt-[160px] bg-gray-50 justify-center sm:px-[80px] md:px-[60px] lg:px-[40px] xl:px-[0px] 2xl:px-[40px] sm:justify-start xl:gap-1">
      {" "}
      {foodData.some((item) => item.category === selectedCategory)
        ? foodData
            .filter((item) => item.category === selectedCategory)
            .map((item) => {
              if (
                item.name
                  .toLocaleLowerCase()
                  .includes(searchVal.toLocaleLowerCase()) ||
                item.category
                  .toLocaleLowerCase()
                  .includes(searchVal.toLocaleLowerCase())
              ) {
                return <FoodCard item={item} key={item.id} />;
              } else {
                <p className="text-red-500">No item found</p>;
              }
            })
        : foodData.map((item) => {
            if (
              item.name
                .toLocaleLowerCase()
                .includes(searchVal.toLocaleLowerCase()) ||
              item.category
                .toLocaleLowerCase()
                .includes(searchVal.toLocaleLowerCase())
            ) {
              return <FoodCard item={item} key={item.id} />;
            } else {
              <p className="text-red-500">No item found</p>;
            }
          })}
      {!foodData.some(
        (item) =>
          item.name
            .toLocaleLowerCase()
            .includes(searchVal.toLocaleLowerCase()) ||
          item.category
            .toLocaleLowerCase()
            .includes(searchVal.toLocaleLowerCase())
      ) && (
        <div className=" w-full flex h-[50vh] flex-col justify-center items-center">
          <img src={emptyImg} alt="empty" className="w-20" />
          <p className="text-gray-600  text-[16px] sm:text-xl font-semibold py-5">
            Oops! That item isn't on the menu
          </p>
        </div>
      )}
    </div>
  );
};

export default cardList;
