import React from "react";

const AccorCard = ({ handleTogles, item, activeIndex }) => {
  return (
    <div>
      <div className="border-2 border-black border-solid justify-items-center">
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleTogles(item.id);
          }}
          className="text-xl cursor-pointer text-center px-10 py-4 w-full hover:bg-blue-500 hover:text-white text-black font-semibold"
        >
          {item.firstname}
        </div>
        {activeIndex === item.id && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-black text-lg p-2 border-2 border-gray-900 hover:bg-blue-200 justify-items-center font-semibold"
          >
            {item.about}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccorCard;
