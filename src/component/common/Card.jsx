// Card.js
import React from 'react';
import './allCommon.css'

const Card = ({ imagePath, header, footer, children, width, height }) => {
    const cardStyle = {
        width: width || '100%',
        height: height || 'auto',
    };
    return (
        <div className="card" style={cardStyle}>
            {imagePath && <img src={imagePath} alt="Card Background" className="card-image" />}
            {!imagePath && header && <div className="card-header">{header}</div>}
            <div className="card-content">
                {children}
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

;

export default Card;
