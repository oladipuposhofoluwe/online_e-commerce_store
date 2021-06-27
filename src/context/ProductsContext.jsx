import React, { createContext, useState } from 'react'
import SHOP_DATA from '../shop'

export const ProductsContext = createContext(); // we creat a context

const ProductsContextProvider = ({ children }) => {
    
    const [products] = useState(SHOP_DATA) // we create a state 
    
    return (
        <ProductsContext.Provider value={{ products }}>
            {
                children
            }
        </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;
