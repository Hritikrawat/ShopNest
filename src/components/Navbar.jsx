import React, { useState } from "react";
import { Link } from "react-router";
import ReorderIcon from "@mui/icons-material/Reorder";
import Slider from "./Slider.jsx";
import SearchIcon from "@mui/icons-material/Search";
import RightNav from "./RightNav.jsx";


export default function Navbar({ products }) {
  const [toggle, setToggle] = useState(false);

  const [search, setSearch] = useState("");

  const [suggestion, setSuggestion] = useState([]);

  const toggleHandler = () => {
    console.log('clicked')
    setToggle((perv) => !perv);
  };
  const searchHanlder = () => {
    alert("Clicked");
  };
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value !== "") {
      const filtered = products.filter((e) =>
      e.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestion(filtered);
      // console.log(suggestion);
    } else {
      setSuggestion([]);
    }
  };
  return (
    <>
                        
      
      <div className="bg-purple-500  h-14 flex items-center justify-between px-6 text-white shadow-lg rounded-b-lg">
        {/* logo */}
        <div className="flex items-center space-x-2 cursor-pointer ">
          <div className="w-8 h-8 bg-white text-gray-800 rounded-full flex justify-center items-center font-bold text-sm">
            <Link to={"/home"}>L</Link>
          </div>
          <span className="font-semibold text-base">
            <Link to="/home">MyApp</Link>
          </span>
        </div>

        {/* Center: Optional Title or Nav Links (Hidden on mobile) */}
        <div className="hidden md:block">
          <nav className="flex space-x-10 text-lg font-semibold    ">
            <Link
              to="/Home"
              className="px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/wishlist"
              className="px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out  "
            >
              Wishlist
            </Link>
            <Link
              to="/Cart"
              className="px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out      "
            >
              Cart
            </Link>
            <Link
              to="/Orders"
              className="   px-3 py-1 rounded-md  hover:bg-white/30 transition-colors duration-300 ease-in-out     "
            >
              Orders
            </Link>
          </nav>
        </div>

        {/* Right: My Account & Settings */}
      <RightNav/>
        

        {/* SLider menu  */}
        <div className="md:hidden">
          <ReorderIcon onClick={toggleHandler} />
        </div>

        {toggle && <Slider toggle={toggle} setToggle={setToggle} />}
      </div>




                            {/* Searching Part */}

      <div className="mt-2 w-full flex justify-center items-center px-4">
      
        <div className="relative w-full sm:w-2/3 md:w-1/2 flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search products"
            className="flex-1 p-3 pl-4 bg-purple-100 h-10 rounded-full hover:scale-[1.02] focus:bg-white focus:scale-[1.02] transform transition-all duration-300 text-sm"
            onChange={handleChange}
            value={search}
          />

          {/* Search Icon */}
          
          <SearchIcon
            onClick={searchHanlder}
            className="cursor-pointer text-gray-700 hover:text-black active:scale-90 transition duration-200 ease-in-out"
          />
       
            {/* State of searching  */}
            <div className="absolute top-full left-0 w-full bg-zinc-100 z-10 max-h-60 overflow-y-auto mt-1 rounded shadow text-sm">
              {suggestion.map((e) => (
                <div
                  key={e.id}
                  className="px-4 py-2 hover:bg-purple-300 cursor-pointer"
                  onClick={() => {
                    setSearch(e.title);
                    setSuggestion([]);
                  }}
                >
                  {e.title}
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
}
