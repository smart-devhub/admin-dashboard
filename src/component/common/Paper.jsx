import React from 'react'
import './allCommon.css'
const Paper = ({width, height,onClick,value}) => {
    const cardStyle = {
        width: width || '100%',
        height: height || 'auto',
    };
  return (
    <div className="paper" onClick={onClick} style={cardStyle}>{value}</div>
  )
}

export default Paper