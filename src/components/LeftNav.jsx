import React from 'react'
import { Link } from "react-router";
export default function LeftNav() {
  return (
          <div className="bg-purple-500  h-14 flex items-center justify-between px-6 text-white shadow-lg rounded-b-lg">
        {/* logo */}
        <div className="flex items-center space-x-2 cursor-pointer ">
          <div className="w-8 h-8 bg-white text-gray-800 rounded-full flex justify-center items-center font-bold text-sm">
            <Link to={"/home"}>L</Link>
          </div>
          <span className="font-semibold text-base">
            <Link to="/home">MyApp</Link>
          </span>
        </div>
        </div>


  )
}
