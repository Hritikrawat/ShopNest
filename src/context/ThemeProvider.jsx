import React, { createContext, useState } from 'react'


//Context is created
const ThemeContext = createContext();

//ContextProvider
export const ThemeProvider= ({children}) => {
  const [theme,setTheme] = useState('light')
  const toggleTheme=()=>{
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    
    // setTheme((prev) => {
    // const val= (prev === 'light' ? 'dark' : 'light');
    // console.log('Switching to:', val);
    // return val;}); 
  }  
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
    </ThemeContext.Provider>

    
  )
}
export default ThemeContext
