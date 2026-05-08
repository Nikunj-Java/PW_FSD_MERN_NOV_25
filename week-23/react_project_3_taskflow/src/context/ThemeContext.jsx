import { createContext, useState } from "react";
export const ThemeContext= createContext();

export const ThemeProvider=({children})=>{
    const [dark,setDark]=useState(false);
    const toggleTheme=()=>{
        setDark(!dark);
    }
    return(
        <ThemeContext.Provider value={{dark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}