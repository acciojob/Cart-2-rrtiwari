import React, { useContext } from "react";
import { CartContext } from "./App";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch, totalAmount } = useContext(CartContext);

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  if (state.cart.length === 0) {
    return <h2>Cart is currently empty</h2>;
  } else {
    return (
      <div>
        <ul id="cart-items-list">
          {state.cart.map((item) => (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <h3 id="cart-total-amount">Total: ${totalAmount}</h3>
        <button id="clear-all-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    );
  }
}

export default Cart;
