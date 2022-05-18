import { useEffect, useState } from "react";
import { Feed, Payment, ShoppingCart } from "@mui/icons-material";
import Empty from "../MainAccount/RightAccount/History/Empty/Empty";
import "./mainInfoCart.css";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { updateUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

const MainInfoCart = () => {
  const carts = useSelector((state) => state.cart);
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  let myCart = carts.filter((item) => item.user === currentUser.email);
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState(currentUser.username);
  const [phone, setPhone] = useState(
    currentUser.phone ? currentUser.phone : ""
  );
  const [address, setAddress] = useState(
    currentUser.address ? currentUser.address : ""
  );
  const [note, setNote] = useState(currentUser.note ? currentUser.note : "");

  console.log({ customer, phone, address, note });
  console.log(currentUser);
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
                  <Payment />
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
                      value={customer}
                      onChange={(e) => setCustomer(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Số điện thoại</label>
                    <input
                      type="number"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Địa chỉ nhận hàng</label>
                    <textarea
                      className="form-textarea"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Ghi chú</label>
                    <textarea
                      className="form-textarea"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
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
              <Link
                to="/cart/step3"
                className="btn-payment"
                onClick={() => {
                  dispatch(
                    updateUser({
                      username: currentUser.username,
                      email: currentUser.email,
                      image: currentUser.image,
                      isAdmin: currentUser.isAdmin,
                      token: currentUser.token,
                      phone: phone,
                      address: address,
                      customer: customer,
                      note: note,
                    })
                  );
                }}
              >
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
