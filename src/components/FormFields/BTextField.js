import React from 'react'
import {Form} from "react-bootstrap";
import PropTypes from "prop-types";
import clsx from "classnames"
import {useField} from "formik";

const BTextField = ({label,className,controlId, ...props}) => {
  const baseClass = "mb-3"
  const allClass = clsx(
    baseClass, 
    className
  )
  const [field, meta] = useField(props);
  return (
    <Form.Group className={allClass} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
      {...props} 
      {...field} 
      isInvalid={meta.error && meta.touched}
      isValid={!meta.error && meta.touched}
      />
      {meta.touched && meta.error ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
       ) : null} 
    </Form.Group>
  )
}

BTextField.defaultProps = {
  label: "",
  type: "text",
}

BTextField.propTypes = {
  label: PropTypes.string
}

export default BTextField

