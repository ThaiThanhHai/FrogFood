import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUser } from "../../../../../store/userSlice";
import { useDispatch } from "react-redux";
import "./modalEditInfo.css";

const ModalEditInfo = ({ setIsShow, user }) => {
  const [username, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const dispatch = useDispatch();
  toast.configure();
  console.log(user);
  const handleEditInfo = async () => {
    let url = "/api/users/edit_info";
    let data = {
      username,
      phone,
      email,
      address,
    };
    let type = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await Axios.put(url, data, type);
      toast.success("Chỉnh sửa thành công");
      dispatch(
        updateUser({
          username,
          email,
          image: user.image,
          isAdmin: user.isAdmin,
          token: user.token,
          phone,
          address,
          customer: username,
          note: "",
        })
      );
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra vui lòng thử lại!");
    }
  };

  return (
    <div className="modalEditInfo">
      <div className="m-container">
        <div className="m-title">Chỉnh sửa thông tin</div>
        <div className="m-content">
          <div className="e-form">
            <div className="f-group">
              <label>Họ tên</label>
              <input
                type="text"
                className="e-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="f-group">
              <label>Điện thoại</label>
              <input
                type="text"
                className="e-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="f-group">
              <label>Email</label>
              <input
                type="text"
                className="e-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="f-group">
              <label>Địa chỉ</label>
              <input
                type="text"
                className="e-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="e-btn">
            <div
              className="btn-exit"
              onClick={() => {
                setIsShow(false);
              }}
            >
              Trở lại
            </div>
            <div className="btn-save" onClick={() => handleEditInfo()}>
              Lưu lại
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditInfo;
