import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainCart from "../components/MainCart/MainCart";
import MainInfoCart from "../components/MainInfoCart/MainInfoCart";
import { Routes, Route } from "react-router-dom";
import MainCheckInfoCart from "../components/MainCheckInfoCart/MainCheckInfoCart";

const Cart = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainCart />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/step2" element={<MainInfoCart />} />
        <Route path="/step3" element={<MainCheckInfoCart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Cart;
