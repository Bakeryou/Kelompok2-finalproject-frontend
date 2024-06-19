import { useState } from "react";
import { HiEyeOff, HiEye } from "react-icons/hi";

const InputField = ({ label, type, placeholder, value, onChange, disabled, required, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
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
          name={name}
          disabled={disabled}
          className={`input ${disabled ? 'disabled:bg-[#FFE0B5]' : ''}`}
          required={required}
        />
        {type === "password" && (
          <div onClick={togglePassword}>
            {showPassword ? <HiEye className="eye-icon" /> : <HiEyeOff className="eye-icon" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;