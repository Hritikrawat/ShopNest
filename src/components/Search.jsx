// import React from 'react'
// import SearchIcon from "@mui/icons-material/Search";
// import { useState } from 'react';
// export default function Search() {
    

//     const [search, setSearch] = useState("");
//     const [suggestion, setSuggestion] = useState([]);
//     const handleChange = (e) => {
//     const value = e.target.value;
//     setSearch(value);

//     if (value !== "") {
//       const filtered = products.filter((e) =>
//         e.title.toLowerCase().startsWith(value.toLowerCase())
//       );
//       setSuggestion(filtered);
//       // console.log(suggestion);
//     } else {
//       setSuggestion([]);
//     }

//   };
//    const searchHanlder = () => {
//     alert("Clicked");
//   };

//   return (
//     <div>
//           <div className="mt-2 w-full flex justify-center items-center px-4">
//         <div className="relative w-full sm:w-2/3 md:w-1/2 flex items-center space-x-2">
//           <input
//             type="search"
//             placeholder="Search products"
//             className="flex-1 p-3 pl-4 bg-purple-100 h-10 rounded-full hover:scale-[1.02] focus:bg-white focus:scale-[1.02] transform transition-all duration-300 text-sm"
//             onChange={handleChange}
//             value={search}
//           />

//           {/* Search Icon */}

//           <SearchIcon
//             onClick={searchHanlder}
//             className="cursor-pointer text-gray-700 hover:text-black active:scale-90 transition duration-200 ease-in-out"
//           />

//           {/* State of searching  */}
//           <div className="absolute top-full left-0 w-full bg-zinc-100 z-10 max-h-60 overflow-y-auto mt-1 rounded shadow text-sm">
//             {suggestion.map((e) => (
//               <div
//                 key={e.id}
//                 className="px-4 py-2 hover:bg-purple-300 cursor-pointer"
//                 onClick={() => {
//                   setSearch(e.title);
//                   setSuggestion([]);
//                 }}
//               >
//                 {e.title}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
