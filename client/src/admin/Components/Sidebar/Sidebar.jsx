import { NavLink, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <h3 className="logo">FrogFood</h3>
      </div>
      <div className="hr"></div>
      <div className="center">
        <ul>
          <NavLink to="databoard" className="side-link">
            <li>
              <DashboardIcon className="icon" />
              <span>Trang chủ</span>
            </li>
          </NavLink>
          <p className="title">Danh sách</p>
          <NavLink to="users" className="side-link">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </NavLink>
          <NavLink to="categories" className="side-link">
            <li>
              <StoreIcon className="icon" />
              <span>Loại món ăn</span>
            </li>
          </NavLink>
          <NavLink to="dishes" className="side-link">
            <li>
              <CreditCardIcon className="icon" />
              <span>Món ăn</span>
            </li>
          </NavLink>
          <NavLink to="orders" className="side-link">
            <li>
              <LocalShippingIcon className="icon" />
              <span>Đơn đặt hàng</span>
            </li>
          </NavLink>
          <p className="title">Tiện ích</p>
          <NavLink to="statistic" className="side-link">
            <li>
              <InsertChartIcon className="icon" />
              <span>Thống kê</span>
            </li>
          </NavLink>

          <NavLink to="logorder" className="side-link">
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Lịch sử đơn hàng</span>
            </li>
          </NavLink>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Thiết lập</span>
          </li>
          <p className="title">Tài khoản</p>
          <NavLink to="profile" className="side-link">
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Hồ sơ</span>
            </li>
          </NavLink>
          <NavLink to="logout" className="side-link">
            <li>
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
