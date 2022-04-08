import React from "react";
import foodDelivery from "../../../assets/food-delivery-removebg-preview.png";
import "./banner.css";

const Banner = ({ discount, link }) => {
  return (
    <div className="banner">
      <div className="bannerContent">
        <h3>
          Miễn phí vận chuyển cho đơn hàng chỉ từ <span>{discount}K</span>
        </h3>
        {/* <a href={link}>Xem thêm</a> */}
      </div>
      <img src={foodDelivery} alt="" className="deliveryPic" />
    </div>
  );
};

export default Banner;
