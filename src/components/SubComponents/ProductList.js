import React from "react";

const ProductList = ({ products:listProduct }) => {
  
  // console.log("list products:", listProduct);
  return (
    <>
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
        <div className="row my-4">
          {listProduct.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-3 p-3"
                data-bs-toggle="modal"
                data-bs-target="#product-details-modal"
                key={index}
              >
                <div className="card c-hover">
                  <div
                    className="card-body about-card"
                    style={{ padding: "0.5rem 0.5rem" }}
                  >
                    {/* show best seller  */}
                    {item.bestSeller && (
                      <div className="best-seller">
                        <label className="bg-danger">BEST SELLER</label>
                      </div>
                    )}
                    <img
                      src={item.productImageUrl}
                      className="card-img-top"
                      alt="product currently not available, please contact your dealer"
                      width={100}
                      height={250}
                    />
                    <p className="card-text">{item.productName}</p>
                    <p className="card-text fw-bolder">N {item.productPrice}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductList;
