import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdRestorePage } from "react-icons/md";
import { RiUserShared2Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LuLayoutDashboard fontSize={25} color='gray' /> },
    { name: 'Users', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    { name: 'Products', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    { name: 'Calender', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    { name: 'Settings', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    { name: 'Application', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    { name: 'List', path: '/products', icon: <MdProductionQuantityLimits fontSize={25} color='gray' /> },
    { name: 'Profile', path: '/users', icon: <RiUserShared2Line fontSize={25} color='gray' /> },
    
    { name: 'Log Out', path: '/auth/login', icon: <BiLogOutCircle fontSize={25} color='gray' /> },


    

]

const SmallSidebar = () => {
    const navigate = useNavigate()

    

    const handleNavigate = (x)=>{
        if(x.name==="Log Out"){
            navigate("/auth/login")
        }
         navigate(x.path)
    }
    return (
        <ul className='list' style={{marginTop:"40px"}}>
            {menuItems.map((x,index) => (
                <div key={x.path} className='listItem' style={{
                   
                    marginTop:index===0 ? "20px" :"0px",
                    display:"flex",
                    justifyContent: "center",
                }} onClick={()=>handleNavigate(x)}>
                    {x.icon}
                    
                </div>
            ))}

        </ul>
    )
}

export default SmallSidebar