import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getProducts } from "./Url";
import Footer from "./Footer";
import ProductBasedOnCate from "./ProductBasedOnCate";

export default function Home() {
  // this is how to access env variables;
  // console.log(import.meta.env.VITE_APP_KEY);

  const [products, setProducts] = useState([]);

  const [selectedCate, setSelectedCate] = useState("All");

  //... converting set object into Array.
  const uniqueCate = [...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCate === "All"
      ? products
      : products.filter((e) => e.category === selectedCate);



  
      //Receving data (from dumy json)
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
        console.log("Product list in Home.jsx", res.data.products);
      })
      .catch((e) => console.log("Error : ", e));
  }, []);




  return (
    <div className="min-h-screen max-w-full bg-purple-400 bg-gradient-to-b from-purple-400 to-purple-200">
      <Navbar products={products} />
      
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 ">
      
        {/* "All" Category Card */}
      
        {/* <div
        onClick={() => setSelectedCate("All")}
          className={`cursor-pointer p-4 rounded-xl shadow text-center bg-white hover:bg-purple-100 transition-all 
            ${
            selectedCate === "All" ? "ring-2 ring-purple-600" : ""
          }`}
        >
          <h2 className="font-bold text-purple-700">All</h2>
        </div> */}




       {/* Button of categories */}
        
        {uniqueCate.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCate(cat)}
            className={`cursor-pointer p-4 rounded-xl shadow text-center bg-white hover:bg-purple-100 transition-all ${
              selectedCate === cat ? "ring-2 ring-purple-600" : ""
            }`}
          >
            <h2 className="font-semibold text-gray-800">{cat}</h2>
          </div>
        ))}
      </div>

      <ProductBasedOnCate filteredProducts={filteredProducts} />
      <Footer />
    </div>
  );
}
