import React from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from '../common/Drawer';
import { useWindowSize } from 'react-use';
import Input from '../common/Input';
const DashboardHeader = () => {
  const [isOpenDrawer,setIsOpenDrawer]=React.useState(false)
  const {width}=useWindowSize()
  const handleToggle=()=>{
 
     setIsOpenDrawer(prev=>!prev)
  }
  return (
    <header className='header'>
     {width< 750 && <GiHamburgerMenu fontSize={30} color="red" style={{zIndex:999}} onClick={handleToggle} />}
     <Input
        label=""
        width={300}
        height={40}
       
        type="text"
        placeholder="Search......"
        
       
        
      />

     <Drawer isOpen={isOpenDrawer} toggleDrawer={()=>setIsOpenDrawer(prev=>!prev)}>hello</Drawer>
    </header>
  )
}

export default DashboardHeader