import React from "react";

const Input = ({ id, type, name, label, value, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-10 gap-3">
      <label htmlFor={id} className="font-semibold text-[18px]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className="w-full md:w-3/4 p-2 border outline-none border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
