import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import success from "../assets/success-removebg-preview.png";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col w-full h-[100vh] bg-green-200 justify-center items-center">
      {isLoading ? (
        <ClockLoader color="black" />
      ) : (
        <>
          <img src={success} alt="success" className="h-[150px] w-[250px]" />
          <h1 className="text-xl font-bold m-4 sm:text-3xl">
            Thank you for ordering !
          </h1>
          <p className="text-sm font-semibold px-5">
            Order confirmed! We’re on it. You’ll receive updates as your items
            are prepared and shipped.
          </p>
          <button
            className="px-3 py-2 text-[12px] text-white bg-green-600 rounded-xl m-4 sm:px-5 sm:py-3  xl:text-[16px]"
            onClick={() => navigate("/")}
          >
             Keep Exploring
          </button>
        </>
      )}
    </div>
  );
};

export default SuccessPage;
