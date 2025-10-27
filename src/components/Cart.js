import React, { useContext } from "react";
import { CartContext } from "./App";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch, totalAmount } = useContext(CartContext);

  if (state.cart.length === 0) {
    return <h2>Cart is currently empty</h2>;
  } else {
    return (
      <div id="cart-items-list" className="cart-container">
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="cart-footer">
          <button
            id="clear-all-cart"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Clear Cart
          </button>
          <div>
            Total: <span id="cart-total-amount">${totalAmount}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
