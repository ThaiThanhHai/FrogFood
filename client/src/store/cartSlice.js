import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const getItemIndex = (state, idToFind) => {
  const ids = state.map((item) => item.id);
  return ids.indexOf(idToFind);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      console.log("Action payload: ", action.payload);
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) state.push(action.payload);
      else {
        state[itemIndex].quantity += action.payload.quantity;
        state[itemIndex].price += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.pop(action.payload.id);
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
