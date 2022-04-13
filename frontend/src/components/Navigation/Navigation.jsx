import {
  Web,
  HomeRounded,
  Person,
  AdminPanelSettings,
  Login,
  ShoppingCart,
} from "@mui/icons-material";
import Container from "./Container";
import "./navigation.css";
import { useEffect } from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul id="menu">
        <Container link={"/"} icon={<HomeRounded />} isHome />
        <Container link={"cart"} icon={<ShoppingCart />} />
        <Container link={"blog"} icon={<Web />} />
        <Container link={"account"} icon={<Person />} />
        <Container link={"admin"} icon={<AdminPanelSettings />} />
        <Container link={"login"} icon={<Login />} />
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navigation;
