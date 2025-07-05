import React, { useEffect, useRef, useState } from "react";
import { emp } from "../data";
import AccorCard from "./AccorCard";

const Accordina = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordianRef = useRef(null);

  useEffect(() => {
    const handleWindowClick = () => {
      setActiveIndex(null);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleTogles = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      ref={accordianRef}
      className="w-full h-screen  flex flex-col p-10 items-center justify-center"
    >
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h1 className="text-xl text-center font-extrabold">Accordiance</h1>
        {emp.map((item) => (
          <AccorCard
            key={item.id}
            item={item}
            activeIndex={activeIndex}
            handleTogles={handleTogles}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordina;
