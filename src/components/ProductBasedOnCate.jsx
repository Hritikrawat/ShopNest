import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductBasedOnCate({ filteredProducts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-contain mb-2"
          />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <h3 className="text-sm  line-clamp-2">{product.description  }</h3>
          

          <p className="text-black font-bold">{product.price} ₹</p>
          <div className="flex justify-end mt-2">
            <FavoriteBorderIcon className="text-purple-600 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
