import axios from "axios";

const oneProductLoader = async ({ request }) => {
  let url = new URL(request.url);
  let search = url.searchParams;
  let id = search.get("id");

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
