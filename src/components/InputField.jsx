import React, { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <label className="font-medium text-primary">{label}</label>
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />
        {type === "password" && (
          <div className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <HiEye /> : <HiEyeOff />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;