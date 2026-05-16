import React from "react";

const Product = ({ products }) => {
  return (
    <ul className="list-disc m-5">
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default Product;
