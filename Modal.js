import React, { useState } from 'react';

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeIcon">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="contaierBody">This is a Modal</div>
        <div className="footerButtons">
          <button
            className="closeButton"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
          <button className="continueButton">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
