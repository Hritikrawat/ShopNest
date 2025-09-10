import React from "react";
import Navbar from "./Navbar";
import { useWishList } from "../context/WishListContext";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";

export default function Wishlist() {
  const { wishlistItems, setRemove } = useWishList();
  const { item, addRemove } = useCart();

  return (
    <div className="min-h-screen min-w-full">
      <Navbar />

      {/*  If no items */}
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076508.png" // optional cute empty icon
            alt="Empty Wishlist"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Add products you love to see them here.</p>
            <Button
            variant="outlined"
            onClick={() => navigate("/home")}
            sx={{
              background: "#3399cc",
              color: "white",
              padding: "0.6rem 2rem",
              fontWeight: "bold",
              borderRadius: "0.75rem",
            }}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        // ✅ Show the grid if items exist
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-y-2 space-x-4 bg-amber-50 m-6 rounded-xl shadow-2xl p-4 w-[80%] ml-[10%] mr-[10%]">
          {wishlistItems.map((e) => (
            <div
              key={e.id}
              className="relative justify-center items-center rounded-xl shadow-2xl border border-violet-800 p-4"
            >
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
                <div className="font-semibold p-2">{e.title}</div>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold p-2">
                  Price : <span className="italic">$ {e.price}</span>
                </span>

                <div>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      addRemove(e); // add to cart
                      setRemove(e); // remove from wishlist
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
      )}
    </div>
  );
}
