import { useEffect, useState } from "react";
import { Circle, DeleteTwoTone } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import "./mainCheckInfoCart.css";

const MainCheckInfoCart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  let myCart = carts.filter((item) => item.user === currentUser.email);
  // console.log(myCart);
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
        <div className="checkInfoCart">
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
                <span>Thông tin</span>
              </div>
            </div>
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Circle className="active" />
                </div>
                <span>Thanh toán</span>
              </div>
            </div>
          </div>
          <div className="main-checkInfoCart">
            <div className="infoUser">
              <div className="top-title">
                <span>THÔNG TIN KHÁCH HÀNG</span>
              </div>
              <div className="content">
                <div className="content-info">
                  <div className="info">
                    <p>Tên khách hàng:</p>
                    <span>Thái Thanh Hải</span>
                  </div>
                  <div className="info">
                    <p>Số điện thoại:</p>
                    <span>0332395109</span>
                  </div>
                  <div className="info">
                    <p>Email:</p>
                    <span>haib1809343@student.ctu.edu.vn</span>
                  </div>
                  <div className="info">
                    <p>Địa chỉ giao hàng:</p>
                    <span>
                      Chợ Trà Ốt, Xã Thông Hòa, Huyện Cầu Kè, Trà Vinh
                    </span>
                  </div>
                  <div className="info">
                    <p>Ghi chú:</p>
                    <span></span>
                  </div>
                </div>
                <div className="btn-change-info">Thay đổi</div>
              </div>
            </div>
            <div className="cart-content check">
              <div className="header-info">THÔNG TIN MÓN ĂN</div>
              <div className="main-cart check">
                <div className="cart">
                  {myCart.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="name">
                        <span>{item.name}</span>
                      </div>
                      <div className="quantity">
                        <span>{item.quantity}</span>
                      </div>
                      <div className="price">
                        <span>{item.price}đ</span>
                      </div>
                      <div className="remove">
                        <DeleteTwoTone
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(removeFromCart(item.id));
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="btn-change-cart">Thay đổi</div>
              </div>
            </div>
            <button className="btn-payment">Thanh toán</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainCheckInfoCart;
