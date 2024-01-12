import React, { createContext, useState, useEffect } from 'react'


export const ModeContext = createContext()


const ContextProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        document.body.dataset.darkMode = isDarkMode
    }, [isDarkMode])

    const toggleDarkMode = ()=>{
        setIsDarkMode(prev=>!prev)
    }


    return (

        <ModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
            {children}
        </ModeContext.Provider>
    )
}

export default ContextProvider