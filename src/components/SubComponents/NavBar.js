import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import etz_logo from "../../assets/images/Etranzact_Logo.png";
import RegisterModal from "./RegisterModal";

const NavBar = () => {
  // LOGIN 
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginCLose = () => setShowLogin(false);
  // Registration
  const [showRegister, setShowRegister] = useState(false);
  const handleRegisterOpen = ()=> setShowRegister(true);
  const handleRegisterClose = ()=> setShowRegister(false);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={etz_logo} alt="" width={200} height={24} />
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
              className="btn btn-primary ms-5" onClick={handleRegisterOpen}
            >
              REGISTER
            </button>
          </div>
        </div>
      </nav>
      <hr />
      {/* Login Modal */}
      <LoginModal 
      show={showLogin}
      handleCLose={handleLoginCLose}
      />
      {/* Register Modal */}
      <RegisterModal show={showRegister} handleCLose={handleRegisterClose}/>

    </React.Fragment>
  );
};

export default NavBar;
