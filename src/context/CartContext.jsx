import React, { useState } from 'react'
import { createContext } from 'react';

const CartContext = createContext();

export const CartContextProvider =({children})=>{

    const [item,setItems] = useState([])
    
    return (
        <CartContext.Provider value={{item,setItems}}>
            {children}
            {/* {console.log("Current cart items:", item)} 
            {item.map((e)=>(
                <h1>{e.title}</h1>
            ))} */}
        </CartContext.Provider>
    )
}

export default CartContext;
