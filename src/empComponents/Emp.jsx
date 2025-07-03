import React, { useState } from "react";
import EmpList from "./EmpList";
import EmpInform from "./EmpInform";
import EmpForm from "./EmpForm";
import { emp as initialData } from "../data";

const Emp = () => {
  const [isVisableForm, setIsVisable] = useState(false);
  const [employees, setEmployees] = useState(initialData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleFormVisibility = () => {
    setIsVisable(!isVisableForm);
  };

  const handleAddEmployee = (newEmployee) => {
    const newEmpWithId = { ...newEmployee, id: Date.now() };
    setEmployees([...employees, newEmpWithId]);
    setIsVisable(false);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    if (selectedEmployee?.id === id) setSelectedEmployee(null);
  };
  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
    console.log("Selected Employee: ", employee);
  };

  return (
    <div className="w-full  min-h-screen  relative overflow-hidden">
      <div className="flex justify-between bg-gray-800 text-white p-4">
        <h1 className=" text-xl md:text-3xl  font-semibold">
          Employee DataBase Management
        </h1>
        <button
          onClick={() => toggleFormVisibility()}
          type="button"
          className="px-5 py-2 md:px-10 md:py-4 border-2 rounded-xl font-semibold hover:bg-slate-300 hover:text-black"
        >
          {isVisableForm ? "Cancel" : "Add Employee"}
        </button>
      </div>
      <div
        className={`w-full flex flex-col md:flex-row p-4 gap-4 transition-all duration-300 ${
          isVisableForm
            ? "blur-sm opacity-60 pointer-events-none select-none"
            : ""
        }`}
      >
        <div className="w-full md:w-1/3">
          <EmpList
            employees={employees}
            onSelectEmployee={handleSelectEmployee}
            onDeleteEmployee={handleDeleteEmployee}
          />
        </div>
        <div className=" w-full md:w-2/3">
          <EmpInform employee={selectedEmployee} />
        </div>
      </div>
      {isVisableForm && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-slate-300 rounded-xl p-6 shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 z-10">
          <EmpForm onAddEmployee={handleAddEmployee} />
        </div>
      )}
    </div>
  );
};

export default Emp;
