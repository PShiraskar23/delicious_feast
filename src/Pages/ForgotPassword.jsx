import { useState } from "react";
import FormTextInput from "../Components/form/formTextInput";
import logo from "../assets/cutlery.png";
import FormPasswordInput from "../Components/form/formPwdInput";
import FormButton from "../Components/form/formButton";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import food_bg from "../assets/login_bg.webp";
import FoodBanner from "../Components/foodBanner";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidate = () => {
    let isValid = true;
    if (email === "") {
      toast.error("Email is required.", {
        duration: 3000,
      });
      isValid = false;
    } else if (!emailValidate.test(email)) {
      toast.error("Please enter a valid email.", {
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
    console.log("formData ==>", email);
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
        <div className="bg-white rounded-r-xl p-6 flex flex-col gap-6 justify-center w-[350px]">
          <div className="flex gap-1 items-center">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <p className="font-semibold text-xl text-[#b80404]">
              Delicious Feast
            </p>
          </div>
          <h1 className="text-3xl font-bold self-center">Forgot Password</h1>

          <p className="text-sm font-normal">
            Enter you email and we'll send you a link to reset you password.
          </p>

          <FormTextInput
            type="email"
            name="email"
            label="Email"
            handler={handleChange}
            value={email}
            placeholder="Enter Email"
            disable={false}
            customClass="outline-none w-full border border-gray-300 p-2 rounded-md  text-sm font-normal"
          />

          <FormButton
            handler={handleSubmit}
            label="Submit"
            customClass="bg-green-500 text-lg font-medium text-white py-1 rounded-md "
            disable={false}
          />
          <div
            className="flex items-center gap-1 justify-center text-xs text-blue-800 font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            <MdOutlineArrowBackIosNew className="text-black h-3 w-3" />{" "}
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
