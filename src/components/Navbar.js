import React, { useContext } from "react";
import { CartContext } from "./App";

function Navbar() {
  const { state } = useContext(CartContext);
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1>useReducer</h1>
      <h3 id="nav-cart-item-count">{totalItems}</h3>
    </nav>
  );
}

export default Navbar;


