import React from 'react'
import './allCommon.css'

const Input = (props) => {
    const { label, value, onChange, placeholder, type, required, minLength, maxLength, pattern, errorMessage, width, height } = props
    return (
        <div>
            <label className='label'>{label}</label>
            <input
                style={{width:width,height:height}}
                className='input'
                
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
}

export default Input