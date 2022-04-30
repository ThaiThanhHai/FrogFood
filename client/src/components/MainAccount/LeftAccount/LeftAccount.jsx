import {
  PersonRounded,
  ArticleRounded,
  ChatBubbleOutlineRounded,
  HelpOutlineRounded,
  LockRounded,
  PersonRemoveRounded,
} from "@mui/icons-material";
import "./leftAccount.css";

const LeftAccount = () => {
  return (
    <div className="account-left non-menu">
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
            <a href={"##"}>
              <PersonRounded />
              <span>Thông tin tài khoản</span>
            </a>
          </li>
          <li>
            <a href={"##"}>
              <ArticleRounded />
              <span>Lịch sử đơn hàng</span>
            </a>
          </li>
          <li>
            <a href={"##"}>
              <ChatBubbleOutlineRounded />
              <span>Thông báo</span>
            </a>
          </li>
          <li>
            <a href={"##"}>
              <HelpOutlineRounded />
              <span>Hỏi Đáp</span>
            </a>
          </li>
          <li>
            <a href={"##"}>
              <LockRounded />
              <span>Thay đổi mật khẩu</span>
            </a>
          </li>
          <li>
            <a href={"##"}>
              <PersonRemoveRounded />
              <span>Thu hồi tài khoản</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftAccount;
