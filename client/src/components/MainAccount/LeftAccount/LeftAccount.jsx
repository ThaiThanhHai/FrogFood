import {
  PersonRounded,
  ArticleRounded,
  HelpOutlineRounded,
  LockRounded,
  PersonRemoveRounded,
  ArrowBackRounded,
  LocalShipping,
} from "@mui/icons-material";
import "./leftAccount.css";
import { Link, Outlet } from "react-router-dom";

const LeftAccount = () => {
  return (
    <div className="account-left non-menu">
      <button className="btn-back">
        <ArrowBackRounded />
      </button>
      <div className="l-avatar">
        <div className="image">
          <img
            src="https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png"
            alt=""
          />
        </div>
        <div className="fullname">
          <h3>Thái Thanh Hải</h3>
        </div>
      </div>
      <div className="l-menu">
        <ul>
          <li>
            <Link to="info">
              <PersonRounded />
              <span>Thông tin tài khoản</span>
            </Link>
          </li>
          <li>
            <Link to="history">
              <ArticleRounded />
              <span>Lịch sử đơn hàng</span>
            </Link>
          </li>
          <li>
            <Link to="delivery">
              <LocalShipping />
              <span>Đơn hàng hiện tại</span>
            </Link>
          </li>
          <li>
            <Link to="qna">
              <HelpOutlineRounded />
              <span>Hỏi Đáp</span>
            </Link>
          </li>
          <li>
            <Link to="change_password">
              <LockRounded />
              <span>Thay đổi mật khẩu</span>
            </Link>
          </li>
          <li>
            <Link to="delete_account">
              <PersonRemoveRounded />
              <span>Thu hồi tài khoản</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default LeftAccount;
