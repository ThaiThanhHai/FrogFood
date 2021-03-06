import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state = null;
      localStorage.setItem("user", null);
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;
