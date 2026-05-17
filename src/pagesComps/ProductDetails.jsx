import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <>
      <h1>ProductDetails</h1>
      <p> {product.name} </p>
    </>
  );
};

export default ProductDetails;
