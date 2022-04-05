import React from "react";
import etz_logo from "../../assets/images/Etranzact_Logo.png";
import {Link} from "react-router-dom";
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"
import useModal from "../../hooks/useModal"


const NavBar = () => {
const {showLogin, showRegister, handleLoginOpen, handleLoginClose, handleRegisterOpen, handleRegisterClose} = useModal()
 
 return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={etz_logo} alt="etz-logo" width={200} height={24} />
          </Link>
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
              onClick={handleLoginOpen}
            >
              LOGIN
            </button>
            <button
              className="btn btn-primary ms-5"
              onClick={handleRegisterOpen}
            >
              REGISTER
            </button>
          </div>
        </div>
      </nav>
      <hr />
     {showLogin &&  <LoginModal {...{showLogin, handleLoginClose}}/>}
     {showRegister &&  <RegisterModal {...{showRegister, handleRegisterClose}}/>}
    </>
  );
};

export default NavBar;
