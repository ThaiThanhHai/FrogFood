import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./delAccount.css";

const DelAccount = () => {
  toast.configure();
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const deleteAccount = async (url) => {
    try {
      const res = await Axios.delete(url);
      toast.success("Thu hồi tài khoản thành công");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.success("Có lỗi xảy ra vui lòng thử lại!");
    }
  };

  const Recall = async (url, data, type) => {
    try {
      const res = await Axios.post(url, data, type);
    } catch (error) {
      console.log(error);
      toast.success("Có lỗi xảy ra vui lòng thử lại!");
    }
  };

  const handleRecall = (e) => {
    e.preventDefault();
    let urlDelete = "/api/users/delete2/" + currentUser.email;

    let urlRecall = "/api/users/recall";
    let data = JSON.stringify({
      email: currentUser.email,
      password,
      reason,
    });
    let type = { headers: { "Content-Type": "application/json" } };
    Recall(urlRecall, data, type);
    deleteAccount(urlDelete);
  };

  const [password, setPassword] = useState("");
  const [reason, setReason] = useState("Chưa tiện dụng");
  console.log(currentUser);
  console.log(password);
  console.log(reason);
  return (
    <div className="deleleAccount">
      <div className="f-title">Thu hồi tài khoản</div>
      <div className="f-content ">
        <div className="form-group">
          <label className="form-label color-3">Nhập mật khẩu</label>
          <div className="form-input">
            <input
              type="password"
              className="form-input size12"
              placeholder="Nhập mật khẩu"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group size12">
          <label className="color-3">Hướng dẫn thu hồi</label>
          <div className="form-input">
            <p>
              Cảm ơn bạn đã sử dụng FrogFood Delivery Service
              <br />
              Nếu bạn có bất kỳ sự bất tiện hoặc phàn nàn nào, vui lòng cho
              chúng tôi biết và chúng tôi sẽ thay đổi trong tương lai. Ngoài ra,
              xin lưu ý những điều dưới đây sau khi không còn là thành viên:
            </p>
            <p>
              - Khi hủy đăng ký, thông tin của bạn được điều chỉnh bởi chính
              sách bảo mật của FrogFood phù hợp với Đạo luật Bảo vệ Người tiêu
              dùng về Thương mại Điện tử.
            </p>
            <p>
              - Không thể phục hồi thông tin cá nhân của bạn dưới bất kỳ hình
              thức nào sau quá trình thu hồi.
            </p>
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <div className="custom-radio">
              <input
                type="radio"
                name="customRadio"
                value={reason === "Chưa tiện dụng"}
                onChange={() => {
                  setReason("Chưa tiện dụng");
                }}
                checked
              />
              <label>Chưa tiện dụng</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                name="customRadio"
                value={reason === "Chất lượng dịch vụ"}
                onChange={() => {
                  setReason("Chất lượng dịch vụ");
                }}
              />
              <label>Chất lượng dịch vụ</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                name="customRadio"
                value={reason === "Lý do khác"}
              />
              <label>Lý do khác</label>
              <textarea
                className="form-control"
                placeholder="Vui lòng nhập lý do"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn-recall" onClick={(e) => handleRecall(e)}>
            Thu hồi
          </button>
        </div>
      </div>
    </div>
  );
};

export default DelAccount;
