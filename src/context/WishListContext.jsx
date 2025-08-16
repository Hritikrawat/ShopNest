import React, { createContext, use, useContext, useState } from 'react'

const WishListContext = createContext();


export  function WishListContextProvider({children}) {
  const [wishlistItems,setWishListItems] = useState([]);

  const setRemove = (product) =>{
    setWishListItems((prev)=>(
        prev.some((e)=> e.id===product.id)?
        prev.filter((e)=>e.id!==product.id):
        [...prev,product]
    ))
  }  
  const isInwishList =(product)=>{
    return wishlistItems.some((e)=> e.id===product.id)
}
    return (
    <WishListContext.Provider value={{wishlistItems,setWishListItems,isInwishList,setRemove}}>
    {children}
    </WishListContext.Provider>
  )
}
export const useWishList = () => useContext(WishListContext);
export default WishListContext;
