import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const checkName = (state, name) => {
  const check = state.map((item) => {
    let indexState = false;
    if (item.name === name) {
      indexState = true;
    }
    return indexState;
  });
  console.log("Check Name: ", check.indexOf(true));
  return check.indexOf(true);
};

const getIndexState = (state, name, user) => {
  const check = state.map((item) => {
    let indexState = false;
    if (item.user === user && item.name === name) {
      indexState = true;
    }
    return indexState;
  });
  console.log("Index Name && User: ", check.indexOf(true));
  return check.indexOf(true);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      console.log("Action payload: ", action.payload);
      const isName = checkName(state, action.payload.name);
      let indexState = getIndexState(
        state,
        action.payload.name,
        action.payload.user
      );

      if (isName === -1) {
        console.log("Không trùng NAME => thêm bình thường");
        state.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        if (indexState === -1) {
          console.log("Trùng NAME nhưng không trùng USER => thêm bình thường");
          state.push(action.payload);
          localStorage.setItem("cart", JSON.stringify(state));
        } else {
          console.log("Trùng NAME nhưng trùng USER => tăng quantity và price");
          state[indexState].quantity += action.payload.quantity;
          state[indexState].price += action.payload.price;
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
      // console.log(filterState);
      // let index = getIndex(state, action.payload.user, action.payload.name);
      // console.log(index);
      // console.log(action.payload.name);
      // console.log(isName);
      // console.log(isUser);

      // if (!isName) {
      //   console.log("Không trùng tên món thêm bình thường");
      //   state.push(action.payload);
      //   localStorage.setItem("cart", JSON.stringify(state));
      // } else {
      //   if (!isUser) {
      //     console.log(
      //       "Trùng tên món nhưng không trùng User cũng thêm bình thường"
      //     );
      //     state.push(action.payload);
      //     localStorage.setItem("cart", JSON.stringify(state));
      //   } else {
      //     console.log(
      //       "Trùng tên món nhưng Trùng User tăng số lượng và giá lên"
      //     );
      //     let list = state.map(
      //       (item) =>
      //         item.user === action.payload.user &&
      //         item.name === action.payload.name
      //     );
      //     console.log(list.indexOf(true));
      //     // state[index].quantity += action.payload.quantity;
      //     // state[index].price += action.payload.price;
      //     // localStorage.setItem("cart", JSON.stringify(state));
      //   }

      // let itemIndex = -1;
      // if (state) {
      //   itemIndex = getItemIndex(state, action.payload.id);
      // }
      // if (itemIndex && itemIndex < 0) {
      //   state.push(action.payload);
      //   localStorage.setItem("cart", JSON.stringify(state));
      // } else {
      //   state[itemIndex].quantity += action.payload.quantity;
      //   state[itemIndex].price += action.payload.price;
      //   localStorage.setItem("cart", JSON.stringify(state));
      // }
    },
    removeFromCart: (state, action) => {
      state.pop(action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeAllFromCart: (state, action) => {
      let i;
      for (i = 1; i <= action.payload.lenght; i++) {
        state.pop();
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addtoCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
