import React, { useEffect, useState } from "react";
import { NavBar, ProductBanner, ProductList, Pagination } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../redux/actions/productAction";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(8);

  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => ({
    allProducts: state.productReducer.products,
  }));

  //dispatch action below
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  // console.log({ allProducts });
  //get current postPerPage calculations
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = allProducts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("current post: ", currentPost);
  //function to change the page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <NavBar />
      <ProductBanner products={allProducts} />
      <ProductList products={currentPost} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={allProducts.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default Home;
