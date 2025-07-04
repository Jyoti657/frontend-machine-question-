import React from "react";

const Pagnations = ({handleGoBack,handleGoFront,handlePageChange,currentPage,totalPages}) => {
  return (
    <div className="flex justify-between items-center p-4">
      <button
        onClick={handleGoBack}
        disabled={currentPage === 0}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Left
      </button>
      <button className="">
        {[...Array(totalPages).keys()].map((n) => (
          <span
          key={n}
            onClick={() => handlePageChange(n)}
            className={`cursor-pointer px-10 py-5  border-solid border-yellow-500 rounded transition duration-300 ${
              currentPage === n
                ? "bg-yellow-400 text-black font-bold border-solid border-2 gap-2 border-blue-900" // Active styles
                : "bg-blue-900 text-yellow-300 hover:bg-slate-400 border-2  gap-2 border-solid border-yellow-600"
            }`}
          >
            {n}
          </span>
        ))}
      </button>
      <button
        onClick={handleGoFront}
        disabled={currentPage === totalPages - 1}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Right
      </button>
    </div>
  );
};

export default Pagnations;
