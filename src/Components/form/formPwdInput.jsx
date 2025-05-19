import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

const FormPasswordInput = ({
  type,
  name,
  label,
  handler,
  value,
  placeholder,
  disable,
  customClass,
}) => {
  const [showPwd, setShowPwd] = useState(false);

  //   toggleShowPassword =()=>{

  //   }

  return (
    <div>
      {label && <p className="text-xs font-normal my-1">{label}</p>}

      <input
        type={showPwd ? "text" : type}
        name={name}
        onChange={handler}
        className={customClass}
        value={value}
        placeholder={placeholder}
        disabled={disable}
      />

      <span
        className="cursor-pointer text-gray-500 relative -top-7 left-[270px] transition-transform"
        onClick={() => setShowPwd(!showPwd)}
      >
        {showPwd ? <LuEye /> : <LuEyeOff />}
      </span>
    </div>
  );
};

export default FormPasswordInput;
