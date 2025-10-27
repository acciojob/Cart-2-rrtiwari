import React from "react";

function Cart({ cart, dispatch, totalAmount }) {
  if (cart.length === 0) {
    return <h2>Cart is currently empty</h2>;
  } else {
    return (
      <div>
        <div id="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p id={`cart-item-price-${item.id}`}>${item.price}</p>
              <p id={`cart-amount-${item.id}`}>{item.quantity}</p>

              <button
                id={`increment-btn-${item.id}`}
                onClick={() =>
                  dispatch({ type: "INCREMENT", payload: item.id })
                }
              >
                +
              </button>
              <button
                id={`decrement-btn-${item.id}`}
                onClick={() =>
                  dispatch({ type: "DECREMENT", payload: item.id })
                }
              >
                -
              </button>
              <button
                id={`cart-item-remove-${item.id}`}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <h2 id="cart-total-amount">Total: ${Math.round(totalAmount)}</h2>

        <button
          id="clear-all-cart"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>
    );
  }
}

export default Cart;
