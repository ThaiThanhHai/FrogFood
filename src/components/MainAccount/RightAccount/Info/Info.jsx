import { ArrowBackRounded } from "@mui/icons-material";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <button className="btn-back">
        <ArrowBackRounded />
      </button>
      <h2 className="r-title">Thông tin tài khoản</h2>
      <div className="account-content">
        <div className="row">
          <div className="item">
            <label>Họ tên</label>
            <span>Thái Thanh Hải</span>
          </div>
          <div className="item">
            <label>Số điện thoại</label>
            <span>0332395109</span>
          </div>
          <div className="item">
            <label>Email</label>
            <span>thaithanhhai.ck@gmail.com</span>
          </div>
          <div className="item">
            <label>Địa chỉ</label>
            <span>Hẻm 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, CT</span>
          </div>
        </div>
        <button className="btn-update">Sửa thông tin</button>
      </div>
    </div>
  );
};

export default Info;
