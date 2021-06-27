import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';
import { sumItems } from './CartReducer';

export const CartContext = createContext(); //we create a context

const cartFromStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; 

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) } // we need an initial state that we will pass to useReducer hook

const CartContextProvider = ({ children }) => { // we create Cartcontext provider, it accepts children prop
    const [state, dispatch] = useReducer(CartReducer, initialState); // we need a state. we set it to our use reducer
                                                // the reducer takes in our reducer(cart reducer) and the initial state.
    // the dispatch is function that runs the logic on the reducer(logic like add item to cart, remove item, delete item etc.
    //and store the returns in the new state.)

    const addProduct = (product) => dispatch({type: 'ADD_ITEM', payload: product}) // creating an action creator, then we need to update our reducer
                                            //to listen to the action type: ADD_ITEM
    const increase = (product) => dispatch({ type: 'INCREASE', payload: product });
    const decrease = (product) => dispatch({ type: 'DECREASE', payload: product });
    const removeProduct = (product) => dispatch({ type: 'REMOVE_ITEM', payload: product });
    const clearCart = () => dispatch({ type: 'CLEAR' });


    const contextValues = {
        ...state, // we spread out the state
        addProduct,
        increase,
        decrease,
        removeProduct,
        clearCart,
    }

    return (

        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>

    );
    
}

export default CartContextProvider;

