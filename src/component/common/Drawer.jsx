import React from 'react'
import './allCommon.css'
import { MdCancel } from "react-icons/md";
const Drawer = ({isOpen,toggleDrawer,children}) => {
    
  return (
    <div className={isOpen && 'backdrop'}>

   
    <div className={isOpen ? 'open-drawer' : "close-drawer"}>
      <div className="drawer-button" onClick={toggleDrawer}>
         <MdCancel fontSize={30} color="red" className='absolute right-[-15px] z-50'  />
      </div>
      <div className="drawer-content">
       {children}
      </div>
    </div>
    </div>
  )
}

export default Drawer