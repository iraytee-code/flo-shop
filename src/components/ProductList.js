import React from "react";

const ProductList = () => {
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
        <div className>
          <div className="row my-4">
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/a.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/b.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/c.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover c-best-seller">
                <div className="best-seller ">
                  <label className="bg-danger">BEST SELLER</label>
                </div>
                <div
                  className="card-body about-card "
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/d.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/e.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md- p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/f.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover card-s">
                <div
                  className="card-body about-card c-best-seller"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <div className="best-seller ">
                    <label className="bg-danger">BEST SELLER</label>
                  </div>
                  <img
                    src="./assets/images/g.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#product-details-modal"
            >
              <div className="card c-hover">
                <div
                  className="card-body about-card"
                  style={{ padding: "0.5rem 0.5rem" }}
                >
                  <img
                    src="./assets/images/h.png"
                    className="card-img-top"
                    alt="one"
                  />
                  <p className="card-text">Schweppes 33CL Bitter...</p>
                  <p className="card-text fw-bolder">N 2,900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
