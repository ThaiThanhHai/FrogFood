import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="subscribe-from">
          <div className="logo-icon">
            <img src="https://i.imgur.com/ocKuJLb.gif" alt="" />
          </div>
          <h3>ĐĂNG KÝ NHẬN THÔNG TIN KHUYẾN MÃI</h3>
          <form action="" className="form-content">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Nhập email của bạn"
                className="form-control"
              />
              <span className="btn-submit">
                <button type="submit" title="Gửi ngay" className="btn">
                  Gửi ngay →
                </button>
              </span>
            </div>
          </form>
        </div>
        <div className="right-content">
          <div className="info">
            <h3>THÔNG TIN</h3>
            <a className="link" href={"#intro"}>
              Giới thiệu
            </a>
            <a className="link" href={"#news"}>
              Tin tức
            </a>
            <a className="link" href={"#sale"}>
              Khuyến mãi
            </a>
            <a className="link" href={"#recruit"}>
              Tuyển dụng
            </a>
          </div>
          <div className="support">
            <h3>HỖ TRỢ</h3>
            <a className="link" href={"#termOfUse"}>
              Điều khoản sử dụng
            </a>
            <a className="link" href={"#privacyPolicy"}>
              Chính sách bảo mật
            </a>
            <a className="link" href={"#termOfUse"}>
              Chính sách giao hàng
            </a>
            <a className="link" href={"#contact"}>
              Liên hệ
            </a>
          </div>
          <div className="follow">
            <h3>THEO DÕI</h3>
            <div className="social">
              <img src="" alt="" />
              <a className="link" href={"facebook"}>
                Liên hệ
              </a>
            </div>
            <div className="bct-logo">
              <img
                src="https://www.lotteria.vn/grs-static/images/bct.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <strong>© 2022 Frog Food All Rights Reserved</strong>
        <p>Site by Thái Thanh Hải</p>
      </div>
    </div>
  );
};

export default Footer;
