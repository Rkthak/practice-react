import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const ProductDetails = () => {
  let search = useSearchParams();
  const id = search[0].get("id");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const oneProductLoader = async () => {
      try {
        let res = await axios.get(
          `https://6a083202fa9b27c848fabbf1.mockapi.io/products/${id}`,
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      oneProductLoader();
    }
  }, [id]);

  return (
    <>
      <h1>ProductDetails</h1>
      {product ? (
        <>
          <p>
            {product.name} {product.id}
          </p>
        </>
      ) : (
        <p>loading . . . </p>
      )}
    </>
  );
};

export default ProductDetails;
