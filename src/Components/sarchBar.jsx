import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../Redux/slices/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <input
        type="search"
        placeholder="Search here"
        className=" px-2 py-1 sm:py-2 sm:px-3 w-54 w-[80vw] border-[1px] border-gray-500 rounded-md outline-none text-sm  bg-slate-50 cursor-pointer sm:w-48 lg:w-96"
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchBar;
