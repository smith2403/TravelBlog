import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Carousel from "./Carousel";

const Layout = () => (
  <>
    <Navbar />
    <Carousel />
    <div className="container mt-4">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Layout;
