import React, { Fragment } from "react";
import { Modal} from "react-bootstrap";
import PropTypes from "prop-types"

const BModal = ({show, handleClose, title, children}) => {
  
  return (
    <Fragment>
      <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h3 className="">
            {title}
          </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Fragment>
  );
};

BModal.defaultProps = {
    title:"",
    show:false
}

BModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default BModal;
