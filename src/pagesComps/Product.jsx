import React from "react";
import { Link } from "react-router";
import Loader from "./Loader";

const Product = ({ products }) => {
  return (
    <ul className="list-disc m-5">
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default Product;
