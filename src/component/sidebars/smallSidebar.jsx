import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { menuItems } from './menuitems'
import { ModeContext } from '../../context/context'


const SmallSidebar = () => {
    const navigate = useNavigate()
    const {toggleHelp}=useContext(ModeContext)
    

    const handleNavigate = (x)=>{
        if(x.name==="Help"){
            toggleHelp()
        }
        if(x.name==="Log Out"){
            navigate("/auth/login")
        }
         navigate(x.path)
    }
    return (
        <ul className='list' style={{marginTop:"40px"}} key={Math.random()}>
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