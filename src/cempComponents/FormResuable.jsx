import React from "react";

const FormResuable = ({ type, placeholder, label, onChange, value, name }) => {
  return (
    <div className="w-1/2 flex flex-col my-2">
      {label && <label className="text-white text-lg mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default FormResuable;
