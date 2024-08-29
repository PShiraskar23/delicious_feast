import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar";
import CardList from "../Components/cardList";
import Categories from "../Components/categories";
import Cart from "../Components/cart";
import SearchBar from "../Components/sarchBar";
import { useDispatch } from "react-redux";
import { emptyCart } from "../Redux/slices/cartSlice";
import { setCategory } from "../Redux/slices/categorySlice";
import { setSearch } from "../Redux/slices/searchSlice"

const Home = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(emptyCart([]));
    dispatch(setCategory("All"))
    dispatch(setSearch(""))
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="w-full  bg-gray-50 fixed top-0 z-50">
        <Navbar openCart={openCart} />
        <div className="flex justify-center  sm:hidden">
          <SearchBar />
        </div>
        <Categories />
      </div>
      <Cart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      <CardList />
    </div>
  );
};

export default Home;
