import React, { useReducer, createContext } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { cartReducer, initialState } from "./CartReducer";
import "../styles/App.css";

export const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.cart.reduce((total, item) => total + item.amount, 0);
  const totalAmount = state.cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <div id="main">
        <Navbar totalItems={totalItems} />
        <Cart cart={state.cart} dispatch={dispatch} totalAmount={totalAmount} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
