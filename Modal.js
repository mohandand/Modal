import React, { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeIcon">
          <button>x</button>
        </div>
        <div className="contaierBody">This is a Modal</div>
        <div className="footerButtons">
          <button className="closeButton">Close</button>
          <button className="continueButton">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
