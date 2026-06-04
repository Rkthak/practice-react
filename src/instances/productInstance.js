// instace for common api call path

import axios from "axios";

// url of api
const baseURL = "https://6a083202fa9b27c848fabbf1.mockapi.io";

const productAPI = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default productAPI;
