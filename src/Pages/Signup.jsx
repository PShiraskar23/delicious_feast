import { useState } from "react";
import FormTextInput from "../Components/form/formTextInput";
import logo from "../assets/cutlery.png";
import FormPasswordInput from "../Components/form/formPwdInput";
import FormButton from "../Components/form/formButton";
import { useNavigate } from "react-router-dom";
import food_bg from "../assets/login_bg.webp";
import FoodBanner from "../Components/foodBanner";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidate = () => {
    let isValid = true;
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      toast.error("All fields are required.", {
        duration: 3000,
      });
      isValid = false;
    } else if (!emailValidate.test(formData.email)) {
      toast.error("Please enter a valid email.", {
        duration: 3000,
      });
      isValid = false;
    }

    return isValid;
  };

  const handleSignup = () => {
    if (!isValidate()) {
      return;
    }
    console.log("formData ==>", formData);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden flex gap-5 justify-center  items-center bg-black"
      style={{
        backgroundImage: `url(${food_bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex rounded shadow-xl">
        <FoodBanner exploreBtn={true} />
        <div className="bg-white rounded-r-xl p-6 flex flex-col gap-4 justify-center w-[350px] shadow-md">
          <div className="flex gap-1 items-center">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <p className="font-semibold text-xl b80404 text-[#b80404]">
              Delicious Feast
            </p>
          </div>
          <h1 className="text-3xl font-bold self-center">Signup</h1>
          <FormTextInput
            type="text"
            name="username"
            label="Name"
            handler={handleChange}
            value={formData.username}
            placeholder="Enter Name"
            disable={false}
            customClass="outline-none w-full p-2 rounded-md border border-gray-300  text-sm font-normal"
          />

          <FormTextInput
            type="email"
            name="email"
            label="Email"
            handler={handleChange}
            value={formData.email}
            placeholder="Enter Email"
            disable={false}
            customClass="outline-none w-full border border-gray-300 p-2 rounded-md  text-sm font-normal"
          />

          <FormPasswordInput
            type="password"
            name="password"
            label="Password"
            handler={handleChange}
            value={formData.password}
            placeholder="Enter Password"
            disable={false}
            customClass="outline-none w-full border border-gray-300 p-2 rounded  text-sm font-normal"
          />
          <FormButton
            handler={handleSignup}
            label="Signup"
            customClass="bg-green-500 text-lg font-medium text-white py-1 rounded-md"
            disable={false}
          />
          <div className="flex justify-center gap-1">
            <span className="text-xs font-medium">
              Already have an account ?
            </span>
            <span
              className="text-xs text-blue-800 font-medium underline cursor-pointer underline-offset-2"
              onClick={() => navigate("/login")}
            >
              {" "}
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
