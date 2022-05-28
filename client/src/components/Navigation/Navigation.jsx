import { useEffect, useState } from "react";
import {
  Web,
  HomeRounded,
  Person,
  AdminPanelSettings,
  ShoppingCart,
  Login,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import Container from "./Container";
import "./navigation.css";

const Navigation = () => {
  const dispatch = useDispatch();
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
  // console.log(currentUser);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    setIsAdmin(currentUser.isAdmin);
  }, [currentUser]);
  return (
    <div className="navigation">
      <ul id="menu">
        <Container link={"/"} icon={<HomeRounded />} isHome />
        <Container link={"cart"} icon={<ShoppingCart />} />
        {/* <Container link={"blog"} icon={<Web />} /> */}
        <Container link={"account"} icon={<Person />} />
        {isAdmin ? (
          <Container link={"admin"} icon={<AdminPanelSettings />} />
        ) : null}
        {currentUser && (
          <Container
            link={"login"}
            icon={<Login />}
            onClick={() => {
              dispatch(logout());
            }}
          />
        )}
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default Navigation;
