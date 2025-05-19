import React from "react";
import snacks_img from "../assets/snacks.webp";
import FormButton from "./form/formButton";
import { useNavigate } from "react-router-dom";

const FoodBanner = ({ exploreBtn }) => {
  const navigate = useNavigate();
  const handlerExplore = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col w-[500px]  py-6 px-10 bg-[#EC9D04] rounded-l-xl">
      <h1 className="text-2xl font-semibold text-[rgb(184,4,4)]">One Stop</h1>
      <h1 className="text-5xl font-semibold py-2 ">Delicious</h1>
      <h1 className="text-2xl font-semibold text-[rgb(184,4,4)]">Food Place</h1>
      <img
        src={snacks_img}
        alt="snacks"
        className="h-[150px] w-[300px] self-center"
      />
      <p className="py-2 text-sm font-medium ">
        We celebrate the art of food, bringing together the finest ingredients
        and flavors. Every dish is crafted with love, passion, and a commitment
        to quality.
      </p>

      {exploreBtn && (
        <FormButton
          handler={handlerExplore}
          label="Explore"
          customClass="bg-[rgb(19,169,75)] w-28 mt-5 text-lg font-medium text-white py-1 rounded-md self-center"
          disable={false}
        />
      )}
    </div>
  );
};

export default FoodBanner;
