import React, { Fragment } from "react";
import banner from "../../assets/images/Slider1.png";
// import Skeleton from "react-loading-skeleton";

const ProductBanner = ({ products }) => {
  //variable to return all products with an hotsale equivalent of 1
  const hotsaleProduct = products.filter((item) => item.hotSale === 1);
  // .slice(0, 3);
  //console.log("hotsaleProduct:", hotsaleProduct);  returning the hotsale products in the console
  //to get three random hot sale products from the whole hotsale product gotten from the backend
  const randomHotSale = (ar, size) => {
    //spread what i have in hotsaleProduct into a new array
    let newArray = [...ar];
    newArray.splice(Math.floor(Math.random() * ar.length), 1);
    return ar.length <= size + 1 ? newArray : randomHotSale(newArray, size);
  };

  console.log("new random:", randomHotSale(hotsaleProduct, 3));

  const randomResult = randomHotSale(hotsaleProduct, 3);

  // console.log("randomResult:", randomResult, typeof randomResult);
  return (
    <Fragment>
      <section className="hero-section">
        <img src={banner} alt="slider" className="img-fluid" />
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
                {randomResult.map((item, index) => (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <div className="card">
                      <div
                        className="card-body about-card"
                        style={{ padding: "0.5rem 0.5rem" }}
                      >
                        <img
                          src={item.productImageUrl}
                          width={80}
                          height={150}
                          className="card-img-top"
                          alt="productImage currently not available, please contact your dealer"
                        />
                        <p className="card-text">{item.productName}</p>
                        <p className="card-text fw-bolder">
                          N{item.productPrice}
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
