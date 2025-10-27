import React, { useContext } from "react";
import { CartContext } from "./App";

function Navbar() {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1>🛒 My Cart</h1>
      <div>
        Items in cart: <span id="nav-cart-item-count">{totalItems}</span>
      </div>
    </nav>
  );
}

export default Navbar;
