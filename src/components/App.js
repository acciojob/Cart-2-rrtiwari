import React, { useReducer, createContext } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { cartReducer, initialState } from "./CartReducer";
import "../styles/App.css";

const CartContext = createContext();

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalAmount = state.cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <div id="main">
        <Navbar />
        <Cart cart={state.cart} dispatch={dispatch} totalAmount={totalAmount} />
      </div>
    </CartContext.Provider>
  );
}

export { CartContext };
export default App;
