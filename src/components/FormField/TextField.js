import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
  //destructure props
  const { name, type, label, labelName } = props;
  return (
    <div className="mb-3">
      <label htmlFor={label}>{labelName}</label>
      <input type={type} className="form-control form-control-sm" name={name} required />
    </div>
  );
};

TextField.defaultProps = {
  type: PropTypes.string,
};

export default TextField;
