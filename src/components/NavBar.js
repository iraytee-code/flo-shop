import React, { Fragment } from "react";
import etz_logo from "../assets/images/Etranzact_Logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            <img src={etz_logo} alt="" width={200} height={24} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
            <button
              className="btn btn-primary ms-5"
              data-bs-toggle="modal"
              data-bs-target="#login-modal"
              type="submit"
            >
              LOGIN
            </button>
            <button
              className="btn btn-primary ms-5"
              data-bs-toggle="modal"
              data-bs-target="#registration-modal"
              type="submit"
            >
              REGISTER
            </button>
          </div>
        </div>
      </nav>
      <hr />
    </Fragment>
  );
};

export default NavBar;
