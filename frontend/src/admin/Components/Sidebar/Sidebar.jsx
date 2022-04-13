import { Link, Outlet } from "react-router-dom";
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
          <Link to="/admin">
            <li>
              <DashboardIcon className="icon" />
              <span>Trang chủ</span>
            </li>
          </Link>
          <p className="title">Danh sách</p>
          <Link to="users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="categories">
            <li>
              <StoreIcon className="icon" />
              <span>Loại món ăn</span>
            </li>
          </Link>
          <Link to="dishes">
            <li>
              <CreditCardIcon className="icon" />
              <span>Món ăn</span>
            </li>
          </Link>
          <Link to="orders">
            <li>
              <LocalShippingIcon className="icon" />
              <span>Đơn đặt hàng</span>
            </li>
          </Link>
          <p className="title">Tiện ích</p>
          <Link to="statistic">
            <li>
              <InsertChartIcon className="icon" />
              <span>Thống kê</span>
            </li>
          </Link>

          <Link to="logorder">
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Lịch sử đơn hàng</span>
            </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Thiết lập</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
