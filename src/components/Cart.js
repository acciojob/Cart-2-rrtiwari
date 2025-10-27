import React from "react";

function Cart({ cart, dispatch, totalAmount }) {
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  } else {
    return (
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              id={`cart-item-increment-${item.id}`}
              onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            >
              +
            </button>
            <button
              id={`cart-item-decrement-${item.id}`}
              onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
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

        <h2 id="cart-total-amount">$ {totalAmount}</h2>

        <button
          id="clear-cart"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>
    );
  }
}

export default Cart;
