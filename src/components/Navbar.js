import React, { useContext } from "react";
import { CartContext } from "./App";

function Navbar() {
  const { state } = useContext(CartContext);
  // Cypress expects the number of items, not total quantity
  const totalItems = state.cart.length;

  return (
    <nav className="navbar">
      <h1>useReducer</h1>
      <h3 id="nav-cart-item-count">{totalItems}</h3>
    </nav>
  );
}

export default Navbar;

