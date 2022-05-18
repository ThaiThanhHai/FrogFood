import "./delAccount.css";

const DelAccount = () => {
  return (
    <div className="deleleAccount">
      <div className="f-title">Thu hồi tài khoản</div>
      <div className="f-content ">
        <div className="form-group">
          <label className="form-label color-3">Nhập mật khẩu</label>
          <div className="form-input">
            <input
              type="password"
              class="form-input size12"
              placeholder="Nhập mật khẩu"
              name="password"
              value=""
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
                id="r1"
                name="customRadio"
                value="Chưa tiện dụng"
                checked
              />
              <label>Chưa tiện dụng</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="r1"
                name="customRadio"
                value="Chưa tiện dụng"
              />
              <label>Chất lượng dịch vụ</label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="r1"
                name="customRadio"
                value="Chưa tiện dụng"
              />
              <label>Lý do khác</label>
              <textarea
                name="reason_text"
                id="reason_text"
                class="form-control"
                placeholder="Vui lòng nhập lý do"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button class="btn-recall">Thu hồi</button>
        </div>
      </div>
    </div>
  );
};

export default DelAccount;
