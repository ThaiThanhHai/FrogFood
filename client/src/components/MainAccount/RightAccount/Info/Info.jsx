import { useState } from "react";
import { ArrowBackRounded } from "@mui/icons-material";
import "./info.css";
import ModalEditInfo from "./ModalEditInfo/ModalEditInfo";

const Info = () => {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [isShow, setIsShow] = useState(false);

  const hanldeShowModal = (e) => {
    e.preventDefault();
    setIsShow(true);
  };

  return isShow ? (
    <ModalEditInfo setIsShow={setIsShow} user={currentUser} />
  ) : (
    <div className="info">
      <h2 className="r-title">Thông tin tài khoản</h2>
      <div className="account-content">
        <div className="row">
          <div className="item">
            <label>Họ tên</label>
            <span>{currentUser.username}</span>
          </div>
          <div className="item">
            <label>Điện thoại</label>
            <span>{currentUser.phone}</span>
          </div>
          <div className="item">
            <label>Email</label>
            <span>{currentUser.email}</span>
          </div>
          <div className="item">
            <label>Địa chỉ</label>
            <span>{currentUser.address}</span>
          </div>
        </div>
      </div>
      <button className="btn-update" onClick={(e) => hanldeShowModal(e)}>
        Sửa thông tin
      </button>
    </div>
  );
};

export default Info;
