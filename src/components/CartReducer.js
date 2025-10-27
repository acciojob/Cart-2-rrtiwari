export const initialState = {
  cart: [
    { id: 1, name: "Apple iPhone 15", price: 999, quantity: 1 },
    { id: 2, name: "Samsung Galaxy S24", price: 899, quantity: 1 },
  ],
};

export function cartReducer(state, action) {
  if (action.type === "INCREMENT") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload)
        return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    return { ...state, cart: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.cart
      .map((item) => {
        if (item.id === action.payload)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      })
      .filter((item) => item.quantity > 0);
    return { ...state, cart: updatedCart };
  }

  if (action.type === "REMOVE_ITEM") {
    const filteredCart = state.cart.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, cart: filteredCart };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  return state;
}
