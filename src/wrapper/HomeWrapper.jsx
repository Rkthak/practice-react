import React from "react";
import Navbar from "../pagesComps/Navbar";
import { Outlet } from "react-router";
import Footer from "../pagesComps/Footer";
import Home from "../pages/Home";
import Welcome from "../pagesComps/Welcome";

const HomeWrapper = () => {
  return (
    <div>
      <Welcome />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
