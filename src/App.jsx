import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import HomeWrapper from "./wrapper/HomeWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pagesComps/Product";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./Redux/App/store";
import ProductDetails from "./pagesComps/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: "product/:id",
        element : <ProductDetails/>
      }
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};

export default App;
