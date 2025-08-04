import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductBasedOnCate({ filteredProducts }) {
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
          <h3 className="text-sm  line-clamp-2">{product.description  }</h3>
          

          <div className="flex justify-between ">
          <p className="text-black font-bold mt-2">{product.price} ₹</p>
            <FavoriteBorderIcon className="text-purple-600 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
