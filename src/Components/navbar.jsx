import React, { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import logo from "../assets/cutlery.png";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./sarchBar";

const Navbar = ({ openCart }) => {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const cartItems = useSelector((action) => action.cart.cart);
  const totalQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

  useEffect(() => {
    if (totalQty > 0) {
      setAnimate(true);

      setTimeout(() => {
        setAnimate(false);
      }, 3000);
    }
  }, [totalQty]);
  return (
    <div className="flex flex-row w-full h-12 sm:h-20 justify-between items-center flex-wrap">
      <div className="flex flex-row items-center mx-2 sm:mx-10 ">
        <span>
          <img src={logo} alt="logo" className="w-7 sm:w-10 cursor-pointer" />
        </span>
        <span className="text-[#b80404] font-bold font-serif text-[16px] mx-2 sm:text-2xl sm:mx-3">
          Delicious Feast
        </span>
      </div>

      <div className="hidden sm:block">
        <SearchBar />
      </div>
      
      <div
        className={`mx-3 w-6 h-6 sm:h-8 sm:w-8 rounded-full flex justify-center items-center bg-white shadow-xl cursor-pointer sm:mx-10  sm:order-3`}
        onClick={() => openCart()}
      >
        <IoMdCart
          className={`h-4 w-4 sm:h-6 sm:w-6 ${
            animate && "animate-bounce delay-500 transition-all"
          }`}
        />
        <span className="h-3 w-3 sm:h-5 sm:w-5 bg-red-600 text-white rounded-full fixed top-2 right-2 text-[10px] flex justify-center items-center sm:right-8">
          {totalQty}
        </span>
      </div>
    </div>
  );
};
export default Navbar;
