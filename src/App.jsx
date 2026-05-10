import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import HomeWrapper from "./wrapper/HomeWrapper";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
    path: "/code-kata",
    element: <h1>code kata page</h1>,
  },
  {
    path: "/sql-kata",
    element: <h1>SQL kata page</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
