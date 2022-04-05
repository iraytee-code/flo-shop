import React, { useEffect, useState } from "react";
import {
  NavBar,
  ProductBanner,
  ProductList,
  Footer,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../redux/actions/productAction";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const dispatch = useDispatch();
  const { allProducts, isLoading } = useSelector((state) => ({
    allProducts: state.productReducer.products,
    isLoading: state.loadingReducer.isLoading,
  }));
  console.log("chekcingProducts", allProducts);

  //use to dispatch the action
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allProducts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentpost", currentPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <NavBar />
      <ProductBanner products={allProducts} isLoading={isLoading} />
      <ProductList products={currentPosts} isLoading={isLoading} />
      <Footer
        postsPerPage={postsPerPage}
        totalPosts={allProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;



