import React from 'react';
import './allCommon.css'
import { useWindowSize } from 'react-use';

const Modal = ({ isOpen, onClose, children,noclose,fullwidth }) => {
     const {width}=useWindowSize()
    const clickToClose=()=>{
        if(!noclose){
            onClose()
        }
    }
  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={clickToClose}>
          <div className="content" onClick={(e) => e.stopPropagation()} style={{width:fullwidth ? "100%": width<640 ?"100%" :"50%",height:fullwidth ? "100vh":width<640 ? "100%":"80%"}}>
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
