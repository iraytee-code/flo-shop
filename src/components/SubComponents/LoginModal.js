import React from 'react';
import {BModal, FormField} from "../../components";
import {Form, Row, Col} from "react-bootstrap"
import {Formik} from "formik";
import validation from "../../validations"

const LoginModal = ({showLogin, handleLoginClose}) => {
  return (
    <React.Fragment>
        <BModal
        title="eTranzact eCommerce"
        show={showLogin}
        handleClose={handleLoginClose}
        >
        <p className="text-muted p-0 m-0 text-center"> Login to manage your products</p>
        <Formik
        initialValues={{ 
          email:"",
          password:""
        }}
        onSubmit={(data, { setSubmitting }) => {
        }}
        validationSchema={validation.LoginSchema}
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
                  controlId={"email"}
                  name="email"
                  type={"text"}
                  label={"Email Address"}  
              />
              <FormField.BTextField
                type={"password"}
                name="password"
                label={"Password"}
                controlId={"password"}
              />
              <div>
                <a className="mb-3 d-grid" href="./user.html">
                  <button type="button" className="btn btn-primary">Login</button>
                </a>
                <div className="modal-footer bolder justify-content-center">
                  <p>
                    Don't have an account?<span>
                      {/* <Link>Sign Up</Link> */}
                      </span>
                  </p>
                </div>
              </div>
                </Col>
              </Row>
              {/* <pre>{JSON.stringify(values,null,2)}</pre> */}
            </Form>       
          )}
        </Formik>
        </BModal>   
    </React.Fragment>
  )
}

export default LoginModal


