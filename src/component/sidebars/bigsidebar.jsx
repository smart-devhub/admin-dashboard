import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiUserShared2Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";

import './sidebar.css'
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



const Bigsidebar = () => {
    const navigate = useNavigate()

    const getcolor = (name) => {
        if (window.location.pathname == name) {
            return "#000 !important"
        }


    }

    const handleNavigate = (x) => {
        if (x.name === "Log Out") {
            navigate("/auth/login")
        }
        navigate(x.path)
    }

    return (
        <ul className='list'>
            <img
                className="mx-auto w-24"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
                
            />
            {menuItems.map(x => (
                <div key={x.path} className='listItem' onClick={() => handleNavigate(x)}>
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "12px" }}>{x.icon}</span>
                    <Link className="link" to={x.path} style={{ color: getcolor(x.path), }}>{x.name}</Link>
                </div>
            ))}

        </ul>
    )
}

export default Bigsidebar