import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello world!</h1>,
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
