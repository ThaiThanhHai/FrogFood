import "./changePass.css";

const ChangePass = () => {
  return (
    <div className="changePass">
      <div className="f-title">Thay đổi mật khẩu</div>
      <div className="f-content">
        <div className="form-group">
          <label className="from-label">Mật khẩu cũ</label>
          <div className="form-input">
            <input
              type="password"
              class="form-input"
              placeholder="Nhập mật khẩu cũ"
              name="old_password"
              value=""
            />
          </div>
        </div>
        <div className="form-group">
          <label className="from-label">Nhập mật khẩu mới</label>
          <div className="form-input">
            <input
              type="password"
              class="form-input"
              placeholder="Nhập mật khẩu mới"
              name="new_password"
              value=""
            />
          </div>
        </div>
        <div className="form-group">
          <label className="from-label">Nhập lại mật khẩu</label>
          <div className="form-input">
            <input
              type="password"
              class="form-input"
              placeholder="Nhập lại mật khẩu"
              name="confirm"
              value=""
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn-save">
            Lưu lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
