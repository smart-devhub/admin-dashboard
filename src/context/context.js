import React, { createContext, useState, useEffect } from 'react'


export const ModeContext = createContext()


const ContextProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false)
     const [isOpenDrawer,setIsOpenDrawer] = useState(false)
    useEffect(() => {
        document.body.dataset.darkMode = isDarkMode
    }, [isDarkMode])

    const toggleDarkMode = ()=>{
        setIsDarkMode(prev=>!prev)
    }
    const toggleDrawer=()=>{
        setIsOpenDrawer(prev=>!prev)
    }


    return (

        <ModeContext.Provider value={{isDarkMode,toggleDarkMode,isOpenDrawer,toggleDrawer}}>
            {children}
        </ModeContext.Provider>
    )
}

export default ContextProvider