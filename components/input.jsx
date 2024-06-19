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
        className="focus:outline-none block w-full mt-1 rounded-md border border-primary bg-transparent px-4 py-3 text-primary transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
      />
    </div>
  );
};

export default Input;
