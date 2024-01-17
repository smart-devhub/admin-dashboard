import React, { useContext } from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from '../common/Drawer';
import { useWindowSize } from 'react-use';
import { CgProfile } from "react-icons/cg";
import Input from '../common/Input';
import { IoBulbOutline } from "react-icons/io5";
import { ModeContext } from '../../context/context';
import Bigsidebar from '../sidebars/bigsidebar';

const DashboardHeader = () => {

  const {toggleDarkMode,toggleDrawer,isOpenDrawer}=useContext(ModeContext)

  const { width } = useWindowSize()




 
  return (
    <header className='header'>

      {width < 750 && <GiHamburgerMenu fontSize={30} color="red" style={{ zIndex: 999 }} onClick={toggleDrawer} />}

      <div className='flex flex-1 justify-between items-center p-3'>
        <Input
          label=""
          width={300}
          height={40}

          type="text"
          placeholder="Search......"



        />
        <div className='flex items-center space-x-3'>
          <IoBulbOutline fontSize={30} color='gray' cursor="pointer" style={{ zIndex: 999 }} onClick={()=>toggleDarkMode()} />
          <CgProfile fontSize={30} color='gray' />
        </div>

      </div>


      <Drawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer}>
         <Bigsidebar/>
      </Drawer>
    </header>
  )
}

export default DashboardHeader