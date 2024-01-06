import DashboardHeader from "../component/Header/DashboardHeader";
import React from 'react'
import Bigsidebar from "../component/sidebars/bigsidebar";
import SmallSidebar from "../component/sidebars/smallSidebar";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import './layout.css'
import { useWindowSize } from "react-use";
const DashboardLayout = ({ children }) => {
  const [isBigsidebar, setBigsidebar] = React.useState(true);
  const handleToggle = () => {
    setBigsidebar(prev => !prev)
  }
  const {width}=useWindowSize()
  React.useEffect(()=>{
    if(width<850){
      setBigsidebar(false)
    }else{
      setBigsidebar(true)
    }
  },[width])

  return (
    <div className="container " >
      <>
      {width>600 &&
        <>
          {isBigsidebar ? <MdCancel fontSize={30} color="red" onClick={handleToggle} className="cross" /> :
        <GiHamburgerMenu fontSize={30} color="red" onClick={handleToggle} className="open" />
      }
        </>
      }
      
      </>
      {/* <DashboardHeader/> */}
      {width>600 &&<div className={isBigsidebar ? "bigsidebar" : "smallSidebar"}>
        {isBigsidebar ? <Bigsidebar /> : <SmallSidebar />}

      </div>}

      <main className="main">
        <DashboardHeader/>
        <div style={{padding:20}}>{children}</div>
      </main>


    </div>
  );
};

export default DashboardLayout