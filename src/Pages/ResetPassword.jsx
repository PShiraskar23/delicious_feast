import { useState } from "react";
import logo from "../assets/cutlery.png";
import FormPasswordInput from "../Components/form/formPwdInput";
import FormButton from "../Components/form/formButton";
import { useNavigate } from "react-router-dom";
import food_bg from "../assets/login_bg.webp";
import FoodBanner from "../Components/foodBanner";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidate = () => {
    let isValid = true;
    if (formData.password === "" || formData.confirmPassword === "") {
      toast.error("All fields are required.", {
        duration: 3000,
      });
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      toast.error("Password and confirm password doesn't matched", {
        duration: 3000,
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!isValidate()) {
      return;
    }
    console.log("formData ==>", formData);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden flex justify-center items-center bg-black"
      style={{
        backgroundImage: `url(${food_bg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="flex rounded shadow-xl">
        <FoodBanner exploreBtn={false} />

        <div className="bg-white rounded-r-xl p-6 flex flex-col gap-4 justify-center w-[350px]">
          <div className="flex gap-1 items-center">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <p className="font-semibold text-xl text-[#b80404]">
              Delicious Feast
            </p>
          </div>
          <h1 className="text-3xl font-bold self-center">Reset Password</h1>

          <FormPasswordInput
            type="password"
            name="password"
            label="Password"
            handler={handleChange}
            value={formData.password}
            placeholder="Enter Password"
            disable={false}
            customClass="outline-none w-full border border-gray-300 p-2 rounded-md  text-sm font-normal"
          />

          <FormPasswordInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handler={handleChange}
            value={formData.confirmPassword}
            placeholder="Enter Confirm Password"
            disable={false}
            customClass="outline-none w-full border border-gray-300 p-2 rounded-md  text-sm font-normal"
          />

          <FormButton
            handler={handleSubmit}
            label="Submit"
            customClass="bg-green-500 text-lg font-medium text-white py-1 rounded-md "
            disable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
