import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const BModal = ({  
    show,
    handleClose,
    title,
    hasFooter,
    children,
    ...props
}) => {
  
  return (
    <div className="modal-dialog modal-dialog-centered">
        <Modal show={show} onHide={handleClose} {...props}>
        <Modal.Header closeButton>
          <Modal.Title className="text text-center mb-0 p-0">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {hasFooter && (
          <Modal.Footer>
            <Button variant="secondary" onClick={null}>
              Close
            </Button>
            <Button variant="primary" onClick={null}>
              Save Changes
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  )
}

BModal.defaultProps = {
    title: "",
    show: false

}

BModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default BModal