import React, { useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext, { useCart } from "../context/CartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishList } from "../context/WishListContext";
import Notification from "../utility/Notification";

export default function ProductBasedOnCate({ filteredProducts }) {
  const { addRemove, isInCart } = useCart();
  const { isInwishList, setRemove, set } = useWishList();

  const [notificationMsg, setnotificationMsg] = useState(null);

  const shownotificationMsg = (message, duration = 2500) => {
    setnotificationMsg(message);
    setTimeout(() => {
      setnotificationMsg(null);
    }, duration);
  };
  // const addTocart =(product)=>{
  //   if(addCheck)
  //     {
  //       setItems(prev => prev.filter(e => e!==product))
  //       setAddCheck(false)
  //       console.log("item added and check is set to false")

  //     }
  //     else {
  //       setItems(prev=>([...prev,product]))
  //       setAddCheck(true);
  //       console.log("item added and check is set to true")
  //     }

  // }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-contain mb-2"
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <h3 className="text-sm  line-clamp-2">{product.description}</h3>

          <div className="flex justify-between mt-4">
            <div>
              <p className="text-black font-bold">{product.price} ₹</p>
            </div>

            <div className="space-x-4">
              {/* <ShoppingCartOutlinedIcon className="text-purple-600 cursor-pointer" onClick={()=>addRemove(product)}> */}

              {
                // Items added to cart or not
                isInCart(product) ? (
                  <ShoppingCartIcon
                    className="text-purple-600 cursor-pointer"
                    onClick={() => {
                      addRemove(product);
                      shownotificationMsg("Removed from Cart ");
                    }}
                  />
                ) : (
                  <ShoppingCartOutlinedIcon
                    className="text-purple-600 cursor-pointer"
                    onClick={() => {
                      addRemove(product);
                      shownotificationMsg("Added to Cart ");
                    }}
                  />
                )
              }
              {/* </ShoppingCartOutlinedIcon> */}

              {/* adding items to wihslist */}
              {isInwishList(product) ? (
                <FavoriteIcon
                  className="text-purple-600 cursor-pointer"
                  onClick={() => {
                    setRemove(product);
                    shownotificationMsg("Removed from Wishlist");
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  className="text-purple-600 cursor-pointer"
                  onClick={() => {
                    // console.log(product);
                    setRemove(product);
                    shownotificationMsg("Added to Wishlist");
                  }}
                />
              )}
            </div>
          </div>
        </div>
      ))}
      {notificationMsg && <Notification mess={notificationMsg} />}
    </div>
  );
}
