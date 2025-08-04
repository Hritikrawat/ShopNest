import React from 'react'
import { Link } from "react-router";

export default function UnderConstruction() {
  return (
     <div className="text-center p-4 ">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/work-in-progress-4224357-3518823.png?f=webp"
        className="w-[85%] h-[50%] p-4 rounded-xl ml-auto mr-auto"
      />
      <Link to="/home" className="px-6 py-3 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition duration-300">Go to home page</Link>
    </div>
  )
}
