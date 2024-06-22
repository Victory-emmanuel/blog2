import React from "react";

const Input = ({ type, value, onChange, name, label, placeholder }) => {
  return (
    <div>
      <label className="" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="focus:outline-none block w-full mt-1 rounded-md  border border-primary bg-primary px-4 py-3 text-secondary transition duration-300   focus:none"
      />
    </div>
  );
};

export default Input;
