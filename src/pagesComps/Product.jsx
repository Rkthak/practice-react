import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6a083202fa9b27c848fabbf1.mockapi.io/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <>
      {products && products.length > 0  ? (
        <ul className="flex gap-8 flex-wrap">
          {" "}
          {products.map((product) => (
            <NavLink
              to={`/dashboard/product/${product.id}`}
              className="min-w-fit bg-amber-100 px-4 py-1 rounded text-slate-900 font-medium"
            >
              <li className="">{product.name}</li>
            </NavLink>
          ))}
        </ul>
      ) : (
        <p>Loading.... </p>
      )}
    </>
  );
};

export default Product;
