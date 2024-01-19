import React, { createContext, useState, useEffect } from 'react'


export const ModeContext = createContext()


const ContextProvider = ({ children }) => {
   const [isHelpOpen,setIsHelpOpen]=useState(false)
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
    const toggleHelp=()=>{
        setIsHelpOpen(prev=>!prev)
    
    }


    return (

        <ModeContext.Provider value={{isDarkMode,toggleDarkMode,isOpenDrawer,toggleDrawer,toggleHelp,isHelpOpen}}>
            {children}
        </ModeContext.Provider>
    )
}

export default ContextProvider