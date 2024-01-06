import React, { useState } from 'react';
import './allCommon.css'

const Modal = ({ isOpen, onClose, children,noclose }) => {
    
    const clickToClose=()=>{
        if(!noclose){
            onClose()
        }
    }
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={clickToClose}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
