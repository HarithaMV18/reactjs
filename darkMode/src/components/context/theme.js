import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext=createContext();
export const ThemeContextProvide=({children})=>{
    const [isDarkMode,setIsDarkMode]=useState(false)
    const switchToggle=()=>{
        setIsDarkMode(preValue=>!preValue)
    }
    const toggle=isDarkMode?"dark":"light"
    useEffect(()=>{
        return document.documentElement.setAttribute("data-theme",toggle)
    },[isDarkMode])
    return <ThemeContext.Provider value={{toggle,switchToggle}}>
        {children}
    </ThemeContext.Provider>
}
export const  useTheme=()=>{
  return  useContext(ThemeContext)
}