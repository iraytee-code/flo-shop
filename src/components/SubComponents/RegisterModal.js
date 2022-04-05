import React from 'react'
import {BModal, FormField} from "../../components"
import { options as data } from "../data";
import {Form, Row, Col} from "react-bootstrap"
import {Formik} from "formik";
import validation from "../../validations"

const RegisterModal = ({showRegister, handleRegisterClose}) => {
    return (
        <React.Fragment>
            <BModal
            title="eTranzact eCommerce"
            show={showRegister}
            handleClose={handleRegisterClose}
            >
            <p className="text-muted p-0 m-0 text-center"> Create an account to set your own products</p>
            <Formik
                initialValues={{
                    fullName: "",
                    username: "",
                    email: "",
                    password: "",
                    gender: "",
                    contactInfo: [
                      {
                        address: "",
                        phoneNumber: ""
                      },
                        {
                        address: "",
                        phoneNumber: ""
                      }
                    ]
                  }}
                onSubmit={(data, { setSubmitting }) => {
                }}
                validationSchema={validation.RegisterSchema}
                >
                {(
                    values, 
                    error, 
                    isSubmitting,
                    handleSUbmit, 
                    dirty, 
                    isValid)=>(
                    <Form>
                    <Row>
                        <Col md={12}>
                            <FormField.BTextField
                                controlId={"fullName"}
                                name="fulName"
                                type={"text"}
                                label={"Full Name"} 
                            />
                        </Col>
                        <Col md={12}>
                            <FormField.BTextField
                                type={"email"}
                                name="email"
                                label={"Email Address"}
                                controlId={"email"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormField.BTextField
                                controlId={"Username"}
                                name="username"
                                type={"text"}
                                label={"Username"} 
                            />
                        </Col>
                        <Col md={6}>
                            <FormField.BRadioField
                                data={data.gender}
                                title={"Gender"}
                            /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>                
                            <FormField.BTextField
                                type={"password"}
                                name="password"
                                label={"Password"}
                                controlId={"password"}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <div className="mb-3">
                            <label htmlFor="contact">Contact Info</label>
                        </div>
                        <div className="mb-3">
                <div className="border rounded p-3">
                    <div className="border rounded p-3 d-flex justify-content-between mb-2">
                        <Col md={6}>
                            <FormField.BTextField
                                type="phonenumber"
                                name={"phoneNumber"}
                                label={"Phone Number"}
                                controlId={"phonenumber"}
                                className="me-1"
                            />
                        </Col>
                        <Col md={6}>
                            <FormField.BTextField
                                type="text"
                                name={"address"}
                                label={"Address"}
                                controlId={"Address"}
                                className="ms-1"
                            /> 
                        </Col>
                    </div>
                    <div className="border rounded p-3 d-flex justify-content-between mb-2">
                        <Col md={6}>
                            <FormField.BTextField
                                type="phonenumber"
                                name={"phoneNumber"}
                                label={"Phone Number"}
                                controlId={"phonenumber"}
                                className="me-1"
                            />
                        </Col>
                        <Col md={6}>
                            <FormField.BTextField
                                type="text"
                                name={"address"}
                                label={"Address"}
                                controlId={"Address"}
                                className="ms-1"
                            /> 
                        </Col>
                    </div>
                </div>
                <div className="mb-3 d-grid">
                    <button type="button" className="btn btn-primary">Create Account</button>
                </div>
                <div className="modal-footer bolder justify-content-center">
                    <p>
                    Already have an account?<span><a href="0">Login</a></span>
                    </p>
                </div>
            </div>
                       
                    </Row>
                    {/* <pre>{JSON.stringify(values,null,2)}</pre> */}
                    </Form>       
                )}
            </Formik>
            {/* <form>
           
            <div className="mb-3 d-grid">
                <button type="button" className="btn btn-primary">Create Account</button>
            </div>
            <div className="modal-footer bolder justify-content-center">
                <p>
                Already have an account?<span><a href="./user.html">Login</a></span>
                </p>
            </div>
            </form> */}
            </BModal>
        </React.Fragment>
      )
}

export default RegisterModal

