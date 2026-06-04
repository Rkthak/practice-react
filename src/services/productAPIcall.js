import productAPI from "../instances/productInstance";

const productAPIcall = {
  getProducts: async () => {
    const response = await productAPI.get(`/products`);
    return response.data;
  },
  getProduct: async (id) => {
    const response = await productAPI.get(`/products/${id}`);
    return response.data;
  },
};

export default productAPIcall;
