import { useEffect, useState } from "react";
import { Circle, DeleteTwoTone } from "@mui/icons-material";
import Empty from "../MainAccount/RightAccount/History/Empty/Empty";
import "./mainInfoCart.css";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const MainInfoCart = () => {
  const carts = useSelector((state) => state.cart);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  let myCart = carts.filter((item) => item.user === currentUser.email);

  useEffect(() => {}, [currentUser]);

  const SumPrice = (cart) => {
    let sumPrice = 0;
    cart.map((item) => (sumPrice += item.price));
    return sumPrice;
  };

  let Sum = SumPrice(myCart);

  let ship = 0;

  let fee = 0;

  let Total = Sum + ship + fee;

  return (
    <main className="main">
      <div className="wrapper">
        <div className="infoCartContainer">
          <div className="steps-nav">
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Circle className="active" />
                </div>
                <span>Giỏ hàng</span>
              </div>
            </div>
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Circle className="active" />
                </div>
                <span>Thông tin giỏ hàng</span>
              </div>
            </div>
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Circle />
                </div>
                <span>Thanh toán</span>
              </div>
            </div>
          </div>
          <div className="main-cart">
            <div className="cart-content">
              <h2 className="head-title">THÔNG TIN</h2>
              <div className="shipping-from">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">Khách hàng</label>
                    <input
                      type="text"
                      className="form-input"
                      placholder="Nhập tên của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Số điện thoại</label>
                    <input
                      type="number"
                      className="form-input"
                      placholder="Nhập số điện thoại"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="form-input"
                      placholder="Nhập email của bạn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Địa chỉ nhận hàng</label>
                    <input
                      type="number"
                      className="form-input"
                      placholder="VD: hẻm liên tổ 12-20, Nguyễn Văn Cừ, An Khánh, Ninh Kiều, Cần Thơ"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="cart-right">
              <div className="top">
                <span>THÔNG TIN ĐƠN HÀNG</span>
              </div>
              <div className="content">
                <div className="sub-total">
                  <div className="lbl">Tổng cộng</div>
                  <div className="price">{Sum}đ</div>
                </div>
                <div className="shipping-fee">
                  <div className="lbl">Phí giao hàng</div>
                  <div className="price">0đ</div>
                </div>
                <div className="shipping-fee">
                  <div className="lbl">Mã giảm giá</div>
                  <div className="price">0đ</div>
                </div>
                <div className="total">
                  <div className="lbl">Tạm tính</div>
                  <div className="price">{Total}đ</div>
                </div>
              </div>
              <div className="note-content">
                <label htmlFor="notes">Ghi chú</label>
                <textarea
                  name="notes"
                  id="notes"
                  placeholder="VD: Thêm nhiều tương ớt, tương cà"
                ></textarea>
              </div>
              <Link to="/cart/step3" className="btn-payment">
                Tiếp tục
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
};

export default MainInfoCart;
