import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './sidebar.css'
import { menuItems } from './menuitems'
import { ModeContext } from '../../context/context'
import { useWindowSize } from 'react-use'
import Typography from '../common/Typography'
import Modal from '../common/Modal'
import HelpForm from '../common/HelpForm'

const Bigsidebar = () => {
   const {isHelpOpen,toggleHelp}=useContext(ModeContext)
    const navigate = useNavigate()
    const {width}=useWindowSize()
    const {toggleDrawer}=useContext(ModeContext)
    const getcolor = (name) => {
        if (window.location.pathname === name) {
            return "#000 !important"
        }

    }

    const handleNavigate = (x) => {
        if(x.name==="Help"){
            toggleHelp()
        }
        if (x.name === "Log Out") {
            navigate("/auth/login")
        }
        navigate(x.path)
        if(width<640){
            toggleDrawer()
        }
       
    }
    const portal="Tech Portal"

    return (
        <>
        <ul className='list'>
            <img
                className="mx-auto w-24"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
                
            />
            <div className='w-full flex justify-center py-5'>
            <Typography text={portal} fontSize={23} />
            </div>
            {menuItems.map(x => (
                <div key={x.path} className='listItem' onClick={() => handleNavigate(x)}>
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "12px" }}>{x.icon}</span>
                    <Link className="link" to={x.path} style={{ color: getcolor(x.path), }}>{x.name}</Link>
                </div>
            ))}

        </ul>
         <Modal isOpen={isHelpOpen} onClose={toggleHelp} noclose >
        <HelpForm/>
      </Modal>
        </>
        
    )
}

export default Bigsidebar