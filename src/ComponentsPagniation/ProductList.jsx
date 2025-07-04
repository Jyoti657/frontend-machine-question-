import React, { useEffect, useState } from "react";
import ProductRecipesCard from "./ProductRecipesCard";
import { size } from "./ulti";
import Pagnations from "./Pagnations";

const ProductList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchingRecipe = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Errror in the fetching the data");
      }
    };
    fetchingRecipe();
  }, [currentPage]);
  // Logic for the page Calcuations on the according
  const totalPages = Math.ceil(recipes.length / size);
  const start = currentPage * size;
  const end = start + size;
  const handleGoBack = () => {
    setCurrentPage((p) => p - 1);
  };
  const handleGoFront = () => {
    setCurrentPage((p) => p + 1);
  };
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  return (
    <>
      <div className=" w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {recipes.slice(start, end).map((r) => (
          <div key={r.id} className="flex">
            <ProductRecipesCard image={r.image} name={r.name} instructions={r.instructions}/>
          </div>
        ))}
      </div>
      <Pagnations
      
        handleGoBack={handleGoBack}
        handleGoFront={handleGoFront}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ProductList;
