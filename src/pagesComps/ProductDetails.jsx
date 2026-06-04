import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { selectProduct, setProduct } from "../Redux/Fearures/productSlice";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://6a083202fa9b27c848fabbf1.mockapi.io/products/${id}`)
      .then((response) => dispatch(setProduct(response.data)));
  }, [id, dispatch]);

  console.log(product);

  return (
    <>
      {/* <h1 className="text-2xl font-medium mb-4">ProductDetails</h1> */}
      {product ? (
        <>
          <div className="mb-6">
            <h4 className="font-semibold text-xl mb-1">{product.name} </h4>
            <div className="flex justify-between">
              <p> {product.description} </p>
              <p>
                Price: <strong>{"$" + product.price} </strong>
              </p>
            </div>

            <div className="flex gap-6">
              <p>
                {product.featured
                  ? `⭐  ${product.material}`
                  : product.material}{" "}
              </p>
              <p></p>
            </div>
          </div>

          <button
            className="bg-red-400 px-4 py-1 rounded cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </>
      ) : (
        <p>loading . . . </p>
      )}
    </>
  );
};

export default ProductDetails;
