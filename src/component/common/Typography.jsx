import React from 'react';

const Typography = (props) => {
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
        color: color || 'black',
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
