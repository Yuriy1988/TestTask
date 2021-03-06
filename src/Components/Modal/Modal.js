import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

const style = {
  width: '350px',
  maxWidth: 'none',
};

const Modal = (props) => {
  const { children, close } = props;
  return (
    <Dialog
      modal={false}
      open
      onRequestClose={close}
      contentStyle={props.style || style}
    >
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Modal.defaultProps = {
  close() {},
  style: null,
};


export default Modal;

