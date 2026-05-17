import axios from "axios";

const oneProductLoader = async ({ params }) => {
  const { id } = params;
  try {
    let res = await axios.get(
      `https://6a083202fa9b27c848fabbf1.mockapi.io/products/${id}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};
export default oneProductLoader;
