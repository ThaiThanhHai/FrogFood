import { useEffect, useState } from "react";
import {
  Feed,
  Payment,
  ShoppingCart,
  DeleteTwoTone,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { removeFromCart, removeAllFromCart } from "../../store/cartSlice";
import { updateUser } from "../../store/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Axios from "axios";
import "./mainCheckInfoCart.css";

const MainCheckInfoCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  let myCart = carts.filter((item) => item.user === currentUser.email);
  // console.log(currentUser);
  useEffect(() => {}, [currentUser, myCart]);
  toast.configure();

  const SumPrice = (cart) => {
    let sumPrice = 0;
    cart.map((item) => (sumPrice += item.price));
    return sumPrice;
  };

  let Sum = SumPrice(myCart);

  let ship = 0;

  let fee = 0;

  let Total = Sum + ship + fee;

  const handlePayment = async (e) => {
    e.preventDefault();
    console.log("Thực hiện chức năng thanh toán");

    let url = "/api/cart/payment";
    let data = JSON.stringify({ currentUser, myCart });
    console.log(data);
    let type = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const res = await Axios.post(url, data, type);
      console.log(res.data);
      toast.success("Đặt hàng thành công");
      dispatch(removeAllFromCart({ lenght: myCart.length }));
      dispatch(
        updateUser({
          username: currentUser.username,
          email: currentUser.email,
          image: currentUser.image,
          isAdmin: currentUser.isAdmin,
          token: currentUser.token,
          phone: currentUser.phone,
          address: currentUser.address,
          customer: currentUser.customer,
          note: "",
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="main">
      <div className="wrapper">
        <div className="checkInfoCart">
          <div className="steps-nav">
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <ShoppingCart className="active" />
                </div>
                <span>Giỏ hàng</span>
              </div>
            </div>
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Feed className="active" />
                </div>
                <span>Thông tin</span>
              </div>
            </div>
            <div className="step">
              <div className="inner">
                <div className="icon">
                  <Payment className="active" />
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
                    <span>{currentUser.customer}</span>
                  </div>
                  <div className="info">
                    <p>Số điện thoại:</p>
                    <span>{currentUser.phone}</span>
                  </div>
                  <div className="info">
                    <p>Email:</p>
                    <span>{currentUser.email}</span>
                  </div>
                  <div className="info">
                    <p>Địa chỉ giao hàng:</p>
                    <span>{currentUser.address}</span>
                  </div>
                  <div className="info">
                    <p>Ghi chú:</p>
                    <span>{currentUser.note}</span>
                  </div>
                </div>
                <Link to="/cart/step2" className="btn-change-info">
                  Thay đổi
                </Link>
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
                <div className="totalPrice">
                  <h3>Tổng cộng</h3>
                  <p className="price">{Total}đ</p>
                </div>
                <Link to="/cart" className="btn-change-cart">
                  Thay đổi
                </Link>
              </div>
            </div>
            <button className="btn-payment" onClick={(e) => handlePayment(e)}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
};

export default MainCheckInfoCart;
