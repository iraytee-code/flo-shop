import React, { Fragment } from "react";
import { BModal, FormField } from "../../components";
import { options as data } from "../data";

const RegisterModal = ({ show, handleCLose }) => {
  return (
    <Fragment>
      <BModal title="Register" show={show} handleClose={handleCLose}>
        <form>
          <FormField.TextField name="f-name" type="text" label="f-name" labelName="Full Name" />
          <FormField.TextField name="email" type="text" label="email" labelName="Email Address"/>
          <div className="mb-3 d-flex">
            <div className="in-f">
              <FormField.TextField name="u-name" type="text" labelName="Username" label="u-name" />
            </div>
            <FormField.RadioField
                    title="Gender"
                    data={data.gender}
            />
          </div>
          <FormField.TextField type="password" name="password" label="password" labelName="Password" />
          <div className="mb-3">
            <label htmlFor="contact">Contact Info</label>
          </div>
          <div className="mb-3">
            <div className="border rounded p-3">
              <div className="border rounded p-3 d-flex justify-content-between mb-2">
                <div className="mb-1">
                  <FormField.TextField type="text" name="phonenumber" label="phone-number" labelName="Phone Number" />
                </div>
                
                <div className="mb-1">
                  <FormField.TextField type="text" name="phonenumber" label="phone-number" labelName="Phone Number" />
                </div>
              </div>
              <div className="border rounded p-3 d-flex justify-content-between mb-2">
                <div className="mb-1">
                  <FormField.TextField type="text" name="phonenumber" label="phone-number" labelName="Phone Number" />
                </div>
                
                <div className="mb-1">
                  <FormField.TextField type="text" name="phonenumber" label="phone-number" labelName="Phone Number" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 d-grid">
            <button type="button" className="btn btn-primary">
              Create Account
            </button>
          </div>
          <div className="modal-footer bolder justify-content-center">
            <p>
              Already have an account?
              <span>
                <a href="./user.html">Login</a>
              </span>
            </p>
          </div>
        </form>
      </BModal>
    </Fragment>
  );
};

export default RegisterModal;
