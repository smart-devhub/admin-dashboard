import React from 'react'
import './allCommon.css'

const Drawer = ({isOpen,toggleDrawer,children}) => {
    
  return (
    <div className={isOpen && 'backdrop'}>

   
    <div className={isOpen ? 'open-drawer' : "close-drawer"}>
      <div className="drawer-button" onClick={toggleDrawer}>
         close
      </div>
      <div className="drawer-content">
       {children}
      </div>
    </div>
    </div>
  )
}

export default Drawer