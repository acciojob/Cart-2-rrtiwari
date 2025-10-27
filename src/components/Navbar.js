import React from "react";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <h1>useReducer</h1>
      <h3 id="nav-cart-item-count">{totalItems}</h3>
    </nav>
  );
}

export default Navbar;

