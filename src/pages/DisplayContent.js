import React, { Fragment } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import CategoryPage from './manage-categories/CategoryPage'
import ProductPage from './manage-products/ProductPage'

//lazyloading
// const ProductPage = React.lazy(()=>import("./manage-products/ProductPage"))

const DisplayContent = () => {
  return (
  <Fragment>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/category' element={<CategoryPage/>} />
      </Routes>
  </Fragment>
  )
}

export default DisplayContent