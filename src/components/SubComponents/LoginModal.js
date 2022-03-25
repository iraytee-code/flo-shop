import React, { Fragment } from "react";
import { BModal,FormField } from "../../components";
import { options as data } from "../data";

const LoginModal = ({ show, handleCLose }) => {
  return (
    <Fragment>
      <BModal title="eTranzact ecommerce" show={show} handleClose={handleCLose}>
      <p class="text-muted p-0 m-0 text-center">
            Login to manage your products
          </p>
        <form>
          <FormField.TextField type="text"  name="email" label="email" labelName="Email" />
          <FormField.TextField type="password" name="password" label="password" labelName="Password" />
          <a className="mb-3 d-grid" href="./user.html">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </a>
          <div className="modal-footer bolder justify-content-center">
            <p>
              Don't have an account?
              <span>
                <a href="0#">Sign Up</a>
              </span>
            </p>
          </div>
        </form>
      </BModal>
    </Fragment>
  );
};

export default LoginModal;
