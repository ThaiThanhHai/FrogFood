import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modalUser.css";
import LoaderModal from "../../Loader/LoaderModal";

const ChangePass = ({ Users, id, setIsShow }) => {
  toast.configure();

  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const handleChangePass = async (url, data, type) => {
    try {
      await Axios.put(url, data, type);
      setIsComplete(false);
      toast.success("Thay đổi mật khẩu thành công");
    } catch (err) {
      console.log(err);
      setIsComplete(false);
      toast.error("Có lỗi xảy ray, vui lòng thử lại!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
    if (newPass !== reNewPass) {
      console.log("Mật khẩu không trùng khớp");
      return;
    }
    let url = "/api/users/changePass";
    let data = JSON.stringify({
      id,
      password: newPass,
    });
    let type = {
      headers: { "Content-Type": "application/json" },
    };
    handleChangePass(url, data, type);
  };

  return isComplete ? (
    <LoaderModal />
  ) : (
    <div className="modalUser">
      <div className="modal-contentUser">
        <div className="btn-exit" onClick={() => setIsShow(false)}>
          <span>X</span>
        </div>
        <h1 className="modal-title">Thay đổi mật khẩu</h1>

        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="password">Nhập mật khẩu mới</label>
          <input
            type="password"
            name="password"
            required
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />

          <label htmlFor="repeatPassword">Nhập lại mật khẩu</label>
          <input
            type="password"
            name="repeatPassword"
            value={reNewPass}
            onChange={(e) => {
              setReNewPass(e.target.value);
            }}
          />

          <button type="submit">Thay đổi</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
