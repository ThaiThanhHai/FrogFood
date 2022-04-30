import { useEffect, useState } from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  Dehaze,
} from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
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
    : user;
  console.log(currentUser);

  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, [currentUser]);
  return (
    <div className="header">
      {/* logo */}
      <img
        className="logo"
        src="https://voz.vn/attachments/9-b8nhynz-gif.265791/"
        alt=""
      />
      <h1 className="logoName">Frog Food</h1>

      {/* search */}
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" className="Tìm kiếm" />
      </div>

      {/* shopping cart */}
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_Content">
          <p>2</p>
        </div>
      </div>

      {/* profile */}

      {currentUser.username !== "" && currentUser.image !== "" ? (
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

      {/* toggle */}
      <div className="toggleMenu">
        <Dehaze className="toggleIcon" />
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
