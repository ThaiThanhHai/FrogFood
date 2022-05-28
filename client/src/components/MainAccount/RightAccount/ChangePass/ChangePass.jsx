import { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./changePass.css";

const ChangePass = () => {
  toast.configure();

  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");

  const changePassWord = async (url, data, type) => {
    try {
      const res = await Axios.put(url, data, type);
      console.log(res.data);
      toast.success("Đổi mật khẩu thành công!");
      setCurrentPass("");
      setNewPass("");
      setReNewPass("");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra vui lòng thử lại!");
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPass !== reNewPass) {
      toast.error("Mật khẩu không trùng khớp!");
    }

    let data = JSON.stringify({
      email: currentUser.email,
      currentPass,
      newPass,
    });
    let url = "/api/users/userChangePass";
    let type = { headers: { "Content-Type": "application/json" } };

    changePassWord(url, data, type);
  };

  return (
    <div className="changePass">
      <div className="f-title">Thay đổi mật khẩu</div>
      <div className="f-content">
        <div className="form-group">
          <label className="from-label">Mật khẩu cũ</label>
          <div className="form-input">
            <input
              type="password"
              className="form-input"
              placeholder="Nhập mật khẩu cũ"
              name="old_password"
              value={currentPass}
              onChange={(e) => {
                setCurrentPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="from-label">Nhập mật khẩu mới</label>
          <div className="form-input">
            <input
              type="password"
              className="form-input"
              placeholder="Nhập mật khẩu mới"
              name="new_password"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="from-label">Nhập lại mật khẩu</label>
          <div className="form-input">
            <input
              type="password"
              className="form-input"
              placeholder="Nhập lại mật khẩu"
              name="confirm"
              value={reNewPass}
              onChange={(e) => {
                setReNewPass(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn-save"
            onClick={(e) => handleChangePassword(e)}
          >
            Lưu lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
