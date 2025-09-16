import React, { use, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';

export default function Slider({toggle,setToggle}) {
  // const [toggle,setToggle] = useState(tog)
    console.log(toggle)
    return (
    <div  className={`
            fixed top-0 left-0 w-48 h-screen bg-gray-900 text-white p-4 rounded-bl-xl shadow-lg z-50
            transform transition-all duration-700 ease-in-out
            md:hidden
            ${toggle ? 'translate-x-0' : '-translate-x-full'}
          `}
      >

    {/* Close Button */}
    <div className="flex justify-end mb-4">
      <button
        onClick={() => setToggle(false)}
        className="text-white text-sm hover:text-gray-400"
      >
        <CloseIcon/>
      </button>
    </div>


    {/* Menu Items */}
    <nav className="space-y-6 ">
      
      

      <div>
      <Link to={"/home"}>Home</Link><br/>
      </div>
      <div>
      <Link to={"/Cart"}>Cart</Link><br/>
      </div>
      <div>
      <Link to={"/Wishlist"}>Wishlist</Link><br/>
      </div>
      <div>
      <Link to={"/orders"}>Orders</Link><br/>
      </div>
      <div>
      <Link to={"/Setting"}>Settings</Link><br/>
      </div>
      
      {/* <Link to={"/Wishlist"}>Wishlist</Link> */}
      
      {/* <a href="#" className="block hover:bg-gray-700 p-2 rounded">Home</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Orders</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">Setting</a>
      <a href="#" className="block hover:bg-gray-700 p-2 rounded">About</a> */}
    </nav>
  </div>
)}
