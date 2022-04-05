import React, { Fragment } from "react";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <Fragment>
      <hr />
      <section className="products-section">
        <div className="d-flex justify-content-between">
          <h4>Product Catalog</h4>
          <div>
            <span>Sort</span>
            <span>Date</span>
          </div>
        </div>
        <hr />
        <div className="row my-4" >
          {products.map((productList) => (
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
              key={productList._id}
            >
              <div className="card c-hover">
                {productList.bestSeller ? (
                  <div className="best-seller ">
                    <label className="bg-danger">BEST SELLER</label>
                  </div>
                ) : null}
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src={productList.productImageUrl}
                    className="card-img-top"
                    alt="one"
                    width={100}
                    height={200}
                  />
                  <p className="card-text">{productList.productName}</p>
                  <p className="card-text fw-bolder">
                    {productList.productPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default ProductList;
