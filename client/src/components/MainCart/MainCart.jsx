import { DeleteTwoTone } from "@mui/icons-material";
import Empty from "../MainAccount/RightAccount/History/Empty/Empty";
import "./mainCart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
const MainCart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <main className="main">
      <div className="wrapper">
        <form>
          <div className="cartContainer">
            <div className="main-cart">
              {carts.length !== 0 ? (
                <>
                  <div className="title">
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="cart">
                    {carts.map((item) => (
                      <div className="item" key={item.id}>
                        <div className="image">
                          <img src={item.imgSrc} alt="" />
                        </div>
                        <div className="name">
                          <span>{item.name}</span>
                        </div>
                        <div className="quantity">
                          <span>{item.quantity}</span>
                        </div>
                        <div className="price">
                          <span>{item.price}.000đ</span>
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

                    <div className="btn-pay">
                      <button>Thanh toán</button>
                    </div>
                  </div>
                </>
              ) : (
                <Empty />
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainCart;
