import React from "react";

const ProductRecipesCard = ({ name, image, instructions }) => {
  return (
      <div className="bg-red-300 shadow-md rounded-lg p-4">
      <h1 className="text-xl font-extrabold text-black">{name}</h1>
      <img src={image} alt={name} className="w-full h-48 object-scale-down border-2 border-solid  shadow-xl rounded-full" />
      <p className="text-balck text-lg font-semibold">{instructions}</p>
  </div>
  );
};

export default ProductRecipesCard;
