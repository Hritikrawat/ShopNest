import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import UnderConstruction from "../services/UnderConstruction";
import CartContext from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Cart() {
  const { item } = useContext(CartContext);
  const [count, setCount] = useState(1);
  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full p-4 md:p-10 lg:p-20 gap-4">
        {/* Purchased Items */}
        <div className="w-full lg:w-2/3  space-y-2 h-[600px] overflow-y-auto pr-2">
          {/* Header Row */}
          <div className="px-6 py-3 w-full flex justify-between items-center font-semibold bg-gray-100 rounded-md">
            <div className="w-2/6">Product</div>
            <div className="w-2/6">Details</div>
            <div className="w-1/6 text-center">Quantity</div>
            <div className="w-1/6 text-right">Price</div>
          </div>

          {/* generating div for item  */}
          {item.map((e) => (
            <div className="flex  flex-col sm:flex-row items-center justify-between h-38 px-4 mb-4 rounded-xl shadow-xl bg-amber-50 " key={e.id}>
              {/* Image */}
              <div className="flex-[1] ">
                <img
                  src={e.thumbnail}
                  alt={e.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* details */}
              <div className="w-[40%] overflow-hidden line-clamp-4">
                {e.title}
                <br />
                {e.tags[0]}
                <br />
                {e.stock > 40 ? (
                  <span className="text-green-400 font-semibold">In-stock</span>
                ) : (
                  <span className="text-red-400 font-semibold">
                    out-of-stock
                  </span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center w-[20%]">
                <div>
                  <button
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon />
                  </button>
                  {count}
                  <button
                    onClick={() => {
                      if (count > 1) setCount(count - 1);
                    }}
                  >
                    <RemoveIcon />
                  </button>
                </div>
              </div>

              {/* price */}
              <div className="w-[10%]">{e.price}</div>
            </div>
          ))}
        </div>

        {/* Billing  */}
        <div className="w-full md:w-1/3 bg-amber-100">dd</div>
      </div>

      {/* <UnderConstruction/> */}
    </>
  );
}
