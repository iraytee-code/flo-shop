import React, { Fragment } from "react";
import _ from "lodash";
// import Skeleton from 'react-loading-skeleton'

const ProductBanner = ({ products }) => {
  let hotSaleProducts = products.filter((item) => item.hotSale === 1);
  // let randomHotSaleProducts = hotSaleProducts
  //   .sort(() => Math.random() - Math.random())
  //   .slice(0, 3);
  let randomHotSaleProducts = _.sampleSize(hotSaleProducts, 3);
  console.log("randomProducts", randomHotSaleProducts);
  console.log("hotsalesprod", hotSaleProducts);
  return (
    <Fragment>
      <section className="hero-section">
        <img
          src="./assets/images/Slider1.png"
          alt="slider"
          className="img-fluid"
        />
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row my-3">
            <div className="col-lg-6 col-md-6  p-0">
              <h4>About the eCommerce Website</h4>
              <h4 className="text-muted">Groceries</h4>
              <p className="lh-3 fs-4">
                eTranzact is your number one online shopping site in Nigeria. We
                are an online store where you can purchase all your electronics,
                as well as books, home appliances, kiddies items, fashion items
                for men, women, and children; cool gadgets, computers,
                groceries, automobile parts, and more on the go.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <h4 className="bg-danger px-3 py-2 hot-sale">HOT SALE!!!</h4>
              <div className="row">
                {randomHotSaleProducts.map((item) => (
                  <div className="col-lg-4 col-md-4" key={item._id}>
                    <div className="card">
                      <div
                        className="card-body about-card"
                        style={{ padding: "0.5rem 0.5rem" }}
                      >
                        <img
                          src={item.productImageUrl}
                          className="card-img-top"
                          alt="one"
                          width={80}
                          height={150}
                        />
                        <p className="card-text">{item.ProductName}</p>
                        <p className="card-text fw-bolder">
                          {item.productPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductBanner;
