import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css';

const Modal = ({ open, handleClose, text }) => {
  return (
    <ReactModal
      isOpen={open}
      contentLabel="Project Modal, click overlay to close."
      onRequestClose={handleClose}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <p>{text}</p>
    </ReactModal>
  );
};

export default Modal;
