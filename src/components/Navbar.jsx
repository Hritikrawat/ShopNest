import React, { useState } from 'react';
import {Link} from 'react-router'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ReorderIcon from '@mui/icons-material/Reorder';
import Slider from './Slider.jsx';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  const [toggle,setToggle] = useState(false)

  const toggleHandler=()=>{
    setToggle(perv=>!perv)
  }
  return (
    <>

    
    <div className="bg-purple-500  h-14 flex items-center justify-between px-6 text-white shadow-lg rounded-b-lg">
      {/* logo */}
      <div className="flex items-center space-x-2 cursor-pointer ">
        
        <div className="w-8 h-8 bg-white text-gray-800 rounded-full flex justify-center items-center font-bold text-sm">
        <Link to={'/home'}>L</Link>  
        </div>
        <span className="font-semibold text-base"><Link to='/home'>MyApp</Link></span>
      </div>

      {/* Center: Optional Title or Nav Links (Hidden on mobile) */}
      <div className="hidden sm:block">
        <nav className="flex space-x-10 text-lg font-semibold    ">
          <Link to='/Home' className="px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out">Home</Link>
          <Link to='/Category' className="px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out  ">Category</Link>
          <Link to='/Cart' className="    px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out      ">Cart</Link>
          <Link to='/Order' className="   px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out     ">Orders</Link>
      </nav>
       
      </div>
      
      {/* Right: My Account & Settings */}

      <div className="hidden sm:flex items-center space-x-8 text-sm ">
        <button className="hover:text-gray-300">
          <AccountCircleIcon></AccountCircleIcon>
        </button>
        <button className="hover:text-gray-300"><SettingsIcon/></button>
      </div>


      {/* SLider menu  */}
      <div className='inline-block sm:hidden'>
      <ReorderIcon onClick={toggleHandler}/>
      </div>


      {toggle && <Slider toggle={toggle} setToggle={setToggle}/> }

      
    </div>
        <div className='mt-2 w-full h-10 bg-purple-400 flex justify-center items-center space-x-4'>
        <input type="search" placeholder='Search products'
         className='p-4 bg-purple-100 w-1/3 h-[70%] rounded-full hover:scale-105 focus:bg-white focus:scale-105 transform transition-all duration-500 ' 
         />

         <div>
          <SearchIcon></SearchIcon>
         </div>
    </div>
    </>
    
  );
}
