import React from "react";
import { NavBar, ProductBanner, ProductList } from "../components";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <ProductBanner />
      <ProductList />
    </div>
  );
};

export default Home;
