import React, { useContext } from 'react';
import { ModeContext } from '../../context/context';

const Typography = (props) => {
     const {isDarkMode}=useContext(ModeContext)
    const {
        text,
        fontSize,
        fontWeight,
        color,
        textAlign,
        // Add more typography props as needed
        ...restProps
    } = props;

    const textStyle = {
        fontSize: fontSize || '16px',
        fontWeight: fontWeight || 'normal',
        color: isDarkMode ? 'gray' : color || 'black',
        textAlign: textAlign || 'left',
        // Add more styles based on the typography props
    };

    return (
        <div style={textStyle} {...restProps}>
            {text}
        </div>
    );
};

export default Typography;
