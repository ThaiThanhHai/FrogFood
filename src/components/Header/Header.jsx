import { useEffect } from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  Dehaze,
} from "@mui/icons-material";
import "./header.css";

function Header() {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");

    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);
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
      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png"
            alt=""
            className="profilePic"
          />
        </div>
        <h3 className="username">Thái Thanh Hải</h3>
      </div>

      {/* toggle */}
      <div className="toggleMenu">
        <Dehaze className="toggleIcon" />
      </div>
    </div>
  );
}

export default Header;
