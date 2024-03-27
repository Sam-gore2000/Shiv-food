import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.items.find((item) => item.id === action.payload.id);
      if (existItem) {
        state.items = state.items.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item);
      } else {
        state.items.push({ ...action.payload, qty: 1 }); 
      }
    },
    removeCart: (state, action) => {
        state.items.pop();
  },
  incrementQty: (state, action) => {
    state.items = state.items.map((item) =>
      item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
    );
  },
  decrementQty: (state, action) => {
    state.items = state.items.map((item) =>
      item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
    );
  },
}
});

export const { addToCart, removeCart,incrementQty,decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
