import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UnderConstruction from "../services/UnderConstruction";
import { useWishList } from "../context/WishListContext";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';




export default function Wishlist() {
  const { wishlistItems,setRemove } = useWishList();


  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-2 space-x-2 bg-amber-50 m-6 rounded-xl shadow-2xl p-4 ">
    
    
      {wishlistItems.map((e) => (
        <div
          key={e.id}
          className="relative justify-center items-center rounded-xl shadow-2xl border border-violet-800 p-4"
        >
          {/* Left */}
          <RemoveCircleIcon 
          className="absolute top-2 right-2 text-red-600 cursor-pointer hover:text-red-800"
          onClick={()=>{setRemove(e)}}
          />
          <div>
            <div className="w-40 h-40 p-2">
              <img src={e.thumbnail} alt={e.name} />
            </div>
            {/* <span className="font-semibold p-2">{e.title}</span> */}
            <div className="font-semibold p-2">{e.title}</div>
          </div>
          
          <p className="font-semibold p-2">
            Price : <span className="italic">{e.price}$</span>
          </p>
        
          
        </div>
      ))}
      </div>
    </div>
  );
}
