import React, { createContext, useReducer } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { cartReducer, initialState } from "./CartReducer";
import "../styles/App.css";

const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = state.cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalAmount }}>
      <div id="main">
        <Navbar />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export { CartContext };
export default App;
