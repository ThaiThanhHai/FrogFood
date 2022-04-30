import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cart from "./cartSlice";
import user from "./userSlice";

const reducer = combineReducers({
  cart,
  user,
});

const store = configureStore({
  reducer,
});
export default store;
