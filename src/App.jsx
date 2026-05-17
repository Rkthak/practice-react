import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import HomeWrapper from "./wrapper/HomeWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import productLoader from "./wrapper/productLoader";
import Loader from "./pagesComps/Loader";
import ProductDetails from "./pagesComps/ProductDetails";
import oneProductLoader from "./wrapper/oneProductLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/products",
    element: <Dashboard />,
    loader: productLoader,
    hydrateFallbackElement: <Loader />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
    loader: oneProductLoader,
    hydrateFallbackElement: <Loader />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
