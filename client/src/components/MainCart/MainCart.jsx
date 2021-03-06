import { useEffect, useState } from "react";
import {
  DeleteTwoTone,
  Feed,
  Payment,
  ShoppingCart,
} from "@mui/icons-material";
import Empty from "../MainAccount/RightAccount/History/Empty/Empty";
import "./mainCart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MainCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  let myCart = carts.filter((item) => item.user === currentUser.email);

  const [note, setNote] = useState("");

  useEffect(() => {}, [currentUser, myCart]);

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
        {myCart.length !== 0 ? (
          <div className="cartContainer">
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
                    <Feed />
                  </div>
                  <span>Thông tin</span>
                </div>
              </div>
              <div className="step">
                <div className="inner">
                  <div className="icon">
                    <Payment />
                  </div>
                  <span>Thanh toán</span>
                </div>
              </div>
            </div>
            <div className="main-cart">
              <div className="cart-content">
                <div className="header-cart">
                  <div className="title">Giỏ hàng của bạn</div>
                  <Link className="btn-add-cart" to="/">
                    +Thêm món ăn
                  </Link>
                </div>
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

                <Link className="btn-payment" to="step2">
                  Tiếp tục
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
      <Outlet />
    </main>
  );
};

export default MainCart;
