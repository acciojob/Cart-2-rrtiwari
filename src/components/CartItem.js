import React, { useContext } from "react";
import { CartContext } from "./App";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  function increment() {
    dispatch({ type: "INCREMENT", payload: item.id });
  }

  function decrement() {
    dispatch({ type: "DECREMENT", payload: item.id });
  }

  function removeItem() {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  }

  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p id={`cart-item-price-${item.id}`}>${item.price}</p>
      <div>
        <button id={`decrement-btn-${item.id}`} onClick={decrement}>
          -
        </button>
        <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
        <button id={`increment-btn-${item.id}`} onClick={increment}>
          +
        </button>
        <button id={`cart-item-remove-${item.id}`} onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
