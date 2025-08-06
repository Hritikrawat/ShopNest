import React, { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../context/CartContext";

export default function ProductBasedOnCate({ filteredProducts }) 
{  
  const {item,setItems} = useContext(CartContext);
  
  const addTocart =(product)=>{
    setItems(prev=>([...prev,product]))

  }
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
              <ShoppingCartOutlinedIcon className="text-purple-600 cursor-pointer" onClick={()=>addTocart(product)}/>
              {/* <FavoriteBorderIcon className="text-purple-600 cursor-pointer" onClick={()=>{console.log("Added to wishlist: " ,product.title)}} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
