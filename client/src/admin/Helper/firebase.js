import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeO2s5QP3HjY1U6BgAbObRrK1Tsr--rBQ",
  authDomain: "food-delivery-93acd.firebaseapp.com",
  projectId: "food-delivery-93acd",
  storageBucket: "food-delivery-93acd.appspot.com",
  messagingSenderId: "352158748757",
  appId: "1:352158748757:web:829ad356940b194edc84dc",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
