import React from "react";
import { emp } from "./../data.js";
import delete1 from "../assets/delete1.png";
const EmpList = () => {
  console.log(emp, "This array dtat");
  return (
    <div className="w-full h-screen bg-gray-300 p-4 ">
      <h1 className="text-4xl justify-items-center font-semibold border-2 border-red-600">
        Employee List
      </h1>
      <ul className="w-full h-full flex flex-col items-center">
        {emp.map((em) => (
          <li
            className="text-black w-full flex justify-between font-semibold text-2xl p-2 m-2 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-400 cursor-pointer"
            key={em.id}
          >
            {em.fastname} {em.lastname}
            <img
              src={delete1}
              alt="delete"
              className="w-6 h-6 inline-block ml-4 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpList;
