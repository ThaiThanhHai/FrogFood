import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import Container from "./Container";
import "./navigation.css";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="navigation">
      <ul id="menu">
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<HomeRounded/>} isHome/>
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<Chat/>}/>
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<AccountBalanceWalletRounded/>}/>
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<Favorite/>}/>
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<SummarizeRounded/>}/>
        {/* prettier-ignore */}
        <Container link={'#'} icon = {<Settings/>}/>

        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navigation;
