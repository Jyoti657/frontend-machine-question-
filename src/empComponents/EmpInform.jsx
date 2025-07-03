import React from "react";
import { emp } from "./../data.js";

const EmpInform = () => {
  return (
    <div className="w-full h-full bg-blue-950  p-4  items-center justify-center">
      <h1 className=" text-xl md:text-4xl text-white font-extrabold">Employess Details</h1>

      {emp.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 m-2  flex flex-col  md:flex-row rounded-lg shadow-lg"
        >
          <img
            src={item.imgurl}
            alt={`${item.fastname} ${item.lastname}`}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className=" text-xl md:text-2xl font-semibold">
            {item.fastname} {item.lastname}
          </h2>
          <p className=" text-sm md:text-lg">Email: {item.email}</p>
          <p className=" text-sm md:text-lg">Phone: {item.phone}</p>
          <p className="text-sm md:text-lg">Address: {item.address}</p>
          <p className="text-sm md:text-lg">Age: {item.age}</p>
          <p className=" text-sm md:text-lg">Salary: ${item.salary}</p>
          <p className="text-sm md:text-lg">Department: {item.department}</p>
          <p className=" text-sm md:text-lg">Position: {item.position}</p>
        </div>
      ))}
    </div>
  );
};

export default EmpInform;
