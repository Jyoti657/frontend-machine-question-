import React, { useState } from "react";
import FormResuable from "./FormResuable";

const EmpForm = () => {
  const [item, setItem] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    salary: "",
    department: "",
    position: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((preItem) => ({
      ...preItem,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", item);
  };
  return (
    <form
      className="w-full min-h-screen bg-blue-950 p-8 flex flex-col items-center border-2 border-red-300"
      onSubmit={submitHandler}
    >
      <h1 className="text-white text-4xl font-bold mb-6">Employee Form</h1>

      <FormResuable
        type="text"
        name="fastname"
        value={item.fastname}
        onChange={handleChange}
        placeholder="Enter First Name"
        label="First Name"
      />
      <FormResuable
        type="text"
        placeholder="Enter Last Name"
        label="Last Name"
        name="lastname"
        value={item.lastname}
        onChange={handleChange}
      />
      <FormResuable
        type="email"
        placeholder="Enter Email"
        label="Email"
        name="email"
        value={item.email}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Phone"
        label="Phone"
        name="phone"
        value={item.phone}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Address"
        label="Address"
        name="address"
        value={item.address}
        onChange={handleChange}
      />
      <FormResuable
        type="number"
        placeholder="Enter Age"
        label="Age"
        name="age"
        value={item.age}
        onChange={handleChange}
      />
      <FormResuable
        type="number"
        placeholder="Enter Salary"
        label="salary"
        name="salary"
        value={item.salary}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Department"
        label="Department"
        name="department"
        value={item.department}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Position"
        label="Position"
        name="position"
        value={item.position}
        onChange={handleChange}
      />

      <button className="px-8 py-3 bg-green-500 text-white rounded-lg mt-2 hover:bg-green-700 transition-all duration-300">
        Submit
      </button>
    </form>
  );
};

export default EmpForm;
