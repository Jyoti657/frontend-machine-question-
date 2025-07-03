import React from "react";
import EmpList from "./EmpList";
import EmpInform from "./EmpInform";
import EmpForm from "./EmpForm";

const Emp = () => {
  return (
    <div className="w-full h-screen bg-gray-600 ">
      <div className="flex justify-between bg-gray-800 text-white p-4">
        <h1 className="text-3xl  font-semibold">
          Employee DataBase Management
        </h1>
        <button className="px-10 py-4 border-2 rounded-xl font-semibold hover:bg-slate-300 hover:text-black">
          Add Employee
        </button>
      </div>
      <div className="w-full flex flex-col  md:flex-row border-3 border-solid border-red-300">
        <div className="w-full md:w-1/3">
          <EmpList />
        </div>
        <div className=" w-full md:w-2/3">
          <EmpInform />
        </div>
      </div>
    </div>
  );
};

export default Emp;
