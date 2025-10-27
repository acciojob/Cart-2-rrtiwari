import React, { useContext } from "react";
import { CartContext } from "./App";

function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  function increase() {
    dispatch({ type: "INCREMENT", payload: item.id });
  }

  function decrease() {
    dispatch({ type: "DECREMENT", payload: item.id });
  }

  function removeItem() {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  }

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p id={`cart-item-price-${item.id}`}>${item.price}</p>
      </div>
      <div className="controls">
        <button id={`decrement-btn-${item.id}`} onClick={decrease}>
          -
        </button>
        <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
        <button id={`increment-btn-${item.id}`} onClick={increase}>
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
