import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectProducts, setProducts } from "../Redux/Fearures/productSlice";
import productAPI from "../instances/productInstance";

const Product = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    productAPI.get("/products").then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);

  return (
    <>
      {products && products.length > 0 ? (
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
