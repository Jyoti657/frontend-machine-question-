const EmpInform = ({ employee }) => {
  if (!employee) {
    return (
      <div className="w-full h-full bg-blue-950 text-white p-4 flex items-center justify-center">
        <p className="text-xl">Please select an employee to view details.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-blue-950 p-4   text-white">
      <h1 className="text-xl md:text-4xl font-extrabold  mt-10 text-center mb-4">
        Employee Details
      </h1>

      <div className="bg-gray-100 text-black  justify-items-center p-4 mt-36 flex flex-col md:flex-row rounded-lg shadow-lg">
        <img
          src={employee.imgurl || "https://via.placeholder.com/150"}
          alt={`${employee.firstname || ""} ${employee.lastname || ""}`}
          className="w-32 h-32 rounded-full mb-4 bg-black"
        />
        <div className="ml-4 space-y-2">
          <h2 className="text-2xl font-semibold">
            {employee.firstname || "N/A"} {employee.lastname || ""}
          </h2>
          <p>Email: {employee.email || "N/A"}</p>
          <p>Phone: {employee.phone || "N/A"}</p>
          <p>Address: {employee.address || "N/A"}</p>
          <p>Age: {employee.age !== undefined ? employee.age : "N/A"}</p>
          <p>
            Salary:{" "}
            {employee.salary !== undefined ? `$${employee.salary}` : "N/A"}
          </p>
          <p>Department: {employee.department || "N/A"}</p>
          <p>Position: {employee.position || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default EmpInform;
