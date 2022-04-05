import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import CategoryPage from "./manage-category/CategoryPage"
import ProductPage from "./manage-product/ProductPage"

//const ProductPage = React.lazy(()=> import("./manage-product/product"))

const DisplayContent = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/product" element={<ProductPage/>} />
        </Routes>
    </React.Fragment>
  )
}

export default DisplayContent