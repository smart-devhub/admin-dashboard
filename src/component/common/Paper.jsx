import React from 'react'
import './allCommon.css'
const Paper = ({ width, height, onClick, value,text }) => {
  const cardStyle = {
    width: width || '100%',
    height: height || 'auto',
  };
  return (
    <div className="paper" onClick={onClick} style={cardStyle}>
     <span className='text-2xl text-[#00CDAC] font-serif '>{value}</span>
     <span className='text-[13px]'>{text}</span>
    </div>
  )
}

export default Paper