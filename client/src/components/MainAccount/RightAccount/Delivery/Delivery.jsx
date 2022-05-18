import { useState } from "react";
import Empty from "./Empty/Empty";
import "./delivery.css";
import {
  EventAvailable,
  Feed,
  LocalShipping,
  Payments,
} from "@mui/icons-material";

const Cats = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-delivery-93acd.appspot.com/o/categories%2Fhamburger.png?alt=media&token=beed6992-8b68-4b40-83cc-3f447964355f",
    name: "Hamburger",
    quantity: "1",
    price: "60000",
  },
];

const Notification = () => {
  return (
    <div className="delivery">
      <h2 className="r-title">Đơn hàng của bạn</h2>
      <div className="stepper">
        <div className="step-finish">
          <div className="step-icon">
            <Feed />
          </div>
          <div className="step-text">Đơn hàng đã đặt</div>
        </div>
        <div className="step-finish active">
          <div className="step-icon">
            <Payments />
          </div>
          <div className="step-text">Xác nhận thông tin đơn hàng</div>
        </div>
        <div className="step-finish">
          <div className="step-icon">
            <LocalShipping />
          </div>
          <div className="step-text">Đơn hàng đang được vận chuyển</div>
        </div>
        <div className="step-finish">
          <div className="step-icon">
            <EventAvailable />
          </div>
          <div className="step-text">Đơn hàng đã nhận</div>
        </div>
        <div className="step-line"></div>
      </div>

      <div className="orders">
        {Cats.map((item, index) => (
          <div className="items">
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

export default Notification;
