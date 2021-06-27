import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/ProductsContext';
import CartContextProvider from './context/CartContext';

ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
 

