import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [productsList, SetProductsList] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        SetProductsList(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Creating the pagnation for the project</h1>
      {productsList.map((product) => (
        <ul
          key={product.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "100px", height: "100px" }}
          />
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
