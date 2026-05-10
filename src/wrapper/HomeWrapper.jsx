import React from "react";
import Navbar from "../pagesComps/Navbar";
import { Outlet } from "react-router";
import Footer from "../pagesComps/Footer";

const HomeWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeWrapper;
