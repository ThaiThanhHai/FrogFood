import { useEffect, useState } from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  Dehaze,
} from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

function Header() {
  const user = {
    username: "",
    email: "",
    image: "",
    isAdmin: false,
    token: "",
  };
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const carts = useSelector((state) => state.cart);
  const myCart = carts.filter((item) => item.user === currentUser.email);

  useEffect(() => {}, [currentUser]);
  return (
    <div className="header">
      <img
        className="logo"
        src="https://voz.vn/attachments/9-b8nhynz-gif.265791/"
        alt=""
      />
      <h1 className="logoName">Frog Food</h1>

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" className="Tìm kiếm" />
      </div>

      <Link to="/cart" className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_Content">
          <p>{myCart.length}</p>
        </div>
      </Link>

      {currentUser.username && currentUser.image ? (
        <div className="profile">
          <div className="profileContainer">
            <div className="imgBox">
              <img src={currentUser.image} alt="" className="profilePic" />
            </div>
            <h3 className="username">{currentUser.username}</h3>
          </div>
          <div className="dropdown-profile"></div>
        </div>
      ) : (
        <div className="loginUser">
          <Link to="login">Đăng nhập</Link>
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default Header;
