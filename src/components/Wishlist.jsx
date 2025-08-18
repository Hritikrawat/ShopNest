import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useWishList } from "../context/WishListContext";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlistItems, setRemove } = useWishList();
  const { item, addRemove } = useCart();

  return (
    <div className="min-h-screen min-w-full">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-y-2 space-x-4 bg-amber-50 m-6 rounded-xl shadow-2xl p-4 w-[80%] ml-[10%] mr-[10%]">
        {wishlistItems.map((e) => (
          <div
            key={e.id}
            className="relative justify-center items-center rounded-xl shadow-2xl border border-violet-800 p-4"
          >
            {/* Left */}
            <RemoveCircleIcon
              className="absolute top-2 right-2 text-red-600 cursor-pointer hover:text-red-800"
              onClick={() => {
                setRemove(e);
              }}
            />
            <div>
              <div className="w-40 h-40 p-2">
                <img src={e.thumbnail} alt={e.name} />
              </div>
              {/* <span className="font-semibold p-2">{e.title}</span> */}
              <div className="font-semibold p-2">{e.title}</div>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold p-2">
                Price : <span className="italic">$ {e.price}</span>
              </span>

              {/* Magic Here on icon -> disabled if alredy in the cart and if added to cart removed from wishlist  */}
              <div>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    addRemove(e);        //  addRemove is Utility function for catItems to add and remove items
                    setRemove(e);        //  setRemove similar to cartItems it is list of WishlistItems works same as car
                  }}
                  disabled={item.some((p) => p.id === e.id)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
