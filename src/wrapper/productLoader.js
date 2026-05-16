import axios from "axios";

const productLoader = async () => {
  try {
    const response = await axios.get(
      "https://6a083202fa9b27c848fabbf1.mockapi.io/products",
    );

    return response.data;
  } catch (error) {
    console.log(`fetching error : ${error}`);
    return [];
  }
};

export default productLoader;
