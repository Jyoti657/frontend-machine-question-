import React, { useState } from "react";
import FormResuable from "./FormResuable";

const EmpForm = ({onAddEmployee}) => {
  const [formData, setFormData] = useState({
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
    setFormData((preItem) => ({
      ...preItem,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    onAddEmployee(formData);
    setFormData({
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
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };
  return (
    <form
      className="w-full min-h-screen bg-blue-950 p-8 flex flex-col items-center border-2 border-red-300"
      onSubmit={submitHandler}
    >
      <h1 className="text-white text-4xl font-bold mb-6">Employee Form</h1>

      <FormResuable
        type="text"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        placeholder="Enter First Name"
        label="First Name"
      />
      <FormResuable
        type="text"
        placeholder="Enter Last Name"
        label="Last Name"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
      />
      <FormResuable
        type="email"
        placeholder="Enter Email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Phone"
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Address"
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <FormResuable
        type="number"
        placeholder="Enter Age"
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <FormResuable
        type="number"
        placeholder="Enter Salary"
        label="salary"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Department"
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <FormResuable
        type="text"
        placeholder="Enter Position"
        label="Position"
        name="position"
        value={formData.position}
        onChange={handleChange}
      />

      <button className="px-8 py-3 bg-green-500 text-white rounded-lg mt-2 hover:bg-green-700 transition-all duration-300">
        Submit
      </button>
    </form>
  );
};

export default EmpForm;
