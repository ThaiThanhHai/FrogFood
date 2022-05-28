import { useState, useEffect } from "react";
import Empty from "./Empty/Empty";
import Axios from "axios";
import "./delivery.css";
import {
  EventAvailable,
  Feed,
  LocalShipping,
  Payments,
} from "@mui/icons-material";

const Delivery = () => {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getOrderCart = async () => {
      let url = "/api/cart/orders/" + currentUser.email;
      try {
        const res = await Axios.get(url);
        setCart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderCart();
  }, [cart, currentUser]);

  const currentCart = cart.filter((item) => item.status !== "ok");

  return currentCart.length === 0 ? (
    <Empty />
  ) : (
    <div className="delivery">
      <h2 className="r-title">Đơn hàng của bạn</h2>
      <div className="stepper">
        <div
          className={
            currentCart[0].status === "order" ||
            currentCart[0].status === "delivery"
              ? "step-finish active"
              : "step-finish"
          }
        >
          <div className="step-icon">
            <Feed />
          </div>
          <div className="step-text">Đơn hàng đã đặt</div>
        </div>
        <div
          className={
            currentCart[0].status === "delivery"
              ? "step-finish active"
              : "step-finish"
          }
        >
          <div className="step-icon">
            <Payments />
          </div>
          <div className="step-text">Xác nhận thông tin đơn hàng</div>
        </div>
        <div
          className={
            currentCart[0].status === "delivery"
              ? "step-finish active"
              : "step-finish"
          }
        >
          <div className="step-icon">
            <LocalShipping />
          </div>
          <div className="step-text">Đơn hàng đang được vận chuyển</div>
        </div>
        <div
          className={
            currentCart[0].status === "ok"
              ? "step-finish active"
              : "step-finish"
          }
        >
          <div className="step-icon">
            <EventAvailable />
          </div>
          <div className="step-text">Đơn hàng đã nhận</div>
        </div>
        <div className="step-line"></div>
      </div>

      <div className="orders">
        {currentCart[0].dishes.map((item, index) => (
          <div className="items" key={index}>
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
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="totalDelivery">
          <label>Tổng cộng</label>
          <span>10000000</span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
