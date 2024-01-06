import React from 'react'
import './allCommon.css'
const Button = ({ text, onClick,width,height }) => {
    return (
        <button onClick={onClick} className='button' style={{width:width,height:height}}>{text}</button>
    )
}

export default Button