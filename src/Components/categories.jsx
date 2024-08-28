import React, { useEffect, useState } from "react";
import FoodData from "../foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/slices/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryArr = FoodData.map((item) => item.category);
    categoryArr = new Set([...categoryArr]);
    setCategories([...categoryArr]);
  }, []);

  return (
    <div className="h-8 w-full flex my-3 sm:h-12 scrollbar-hide overflow-auto ">
      <ul className="flex items-center ">
        <li
          onClick={() => dispatch(setCategory("All"))}
          className={`py-1 mx-3 w-20 sm:py-2 sm:mx-3 sm:w-28 text-[12px] sm:text-sm  cursor-pointer text-center border-[1px] rounded-md border-gray-300 text-gray-600 hover:border-green-400 hover:bg-green-100 hover:text-green-400 shadow-lg transition-all duration-200 ease-in ${
            selectedCategory === "All" &&
            `text-green-400 border-green-400 bg-green-100 `
          }`}
        >
          {" "}
          All{" "}  
        </li>

        {categories.length > 0 &&
          categories.map((category, ind) => {
            return (
              <li
                key={ind}
                onClick={() => dispatch(setCategory(category))}
                className={`py-1 mx-3 w-20 sm:py-2 sm:mx-3 sm:w-28 text-[12px] sm:text-sm  cursor-pointer text-center border-[1px] rounded-md  border-gray-300 text-gray-600 hover:border-green-400 hover:bg-green-100 hover:text-green-400 shadow-lg transition-all duration-200 ease-in ${
                  selectedCategory === category &&
                  `text-green-400 border-green-400 bg-green-100 `
                }`}
              >
                {" "}
                {category}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
