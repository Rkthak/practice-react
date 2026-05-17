import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://6a083202fa9b27c848fabbf1.mockapi.io/products/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  return (
    <>
      <h1>ProductDetails</h1>
      <p> {product ? product.name : ""} </p>
    </>
  );
};

export default ProductDetails;
