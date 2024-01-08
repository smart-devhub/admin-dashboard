import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './sidebar.css'
import { menuItems } from './menuitems'

const Bigsidebar = () => {
    const navigate = useNavigate()

    const getcolor = (name) => {
        if (window.location.pathname === name) {
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