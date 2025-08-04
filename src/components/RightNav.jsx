import React, { useContext, useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ThemeContext from '../context/ThemeProvider'

export default function RightNav() {
  const {theme,toggleTheme} = useContext(ThemeContext)
  useEffect(()=>{
    if(theme==='dark')
       document.documentElement.classList.add('dark');
    else {
      document.documentElement.classList.remove('dark');
    }
  },[theme])

  return (
    <div className="hidden md:flex items-center space-x-8 text-sm ">
          
          <button className="hover:text-gray-300 " onClick={toggleTheme}>
            <DarkModeIcon />
          </button>


          <button className="hover:text-gray-300">
            <AccountCircleIcon></AccountCircleIcon>
          </button>
          <button className="hover:text-gray-300">
            <SettingsIcon />
          </button>
        </div>
  )
}


