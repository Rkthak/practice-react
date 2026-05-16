// import axios from "axios";
// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Product from "../pagesComps/Product";
import Loader from "../pagesComps/Loader";

const Dashboard = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://6a083202fa9b27c848fabbf1.mockapi.io/products")
  //     .then((response) => setProducts(response.data));
  // });

  const products = useLoaderData();
  console.log(products);

  return (
    <div className="container m-auto p-2">
      <h1 className="text-2xl font-semibold">Products_</h1>
      <Product products={products} />
    </div>
  );
};

export default Dashboard;
