import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { menuItems } from './menuitems'


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