import React, {createContext, useState } from "react";

export const CartContext= createContext();

export const CartProvider=({children})=>{

    const [selectedItem,setSelectedItem] =useState([])
    return  <CartContext.Provider value={100}>{children}</CartContext.Provider>
    
}