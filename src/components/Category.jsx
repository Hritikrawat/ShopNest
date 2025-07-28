import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getProducts } from "./Url"

export default function Category() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data);
      })
      .catch((err) => console.log("Error :   ", err));
}, []);
  
  
  return (
    <div className="min-h-screen min-w-full bg-amber-200">
        <Navbar />
      <h2>ALL PRODUCTS</h2>
      <div>

      </div>
    </div>
  );
}
