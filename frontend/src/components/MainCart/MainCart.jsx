import { DeleteTwoTone } from "@mui/icons-material";
import Empty from "../MainAccount/RightAccount/History/Empty/Empty";
import "./mainCart.css";

const MainCart = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <form>
          <div className="cartContainer">
            {/* <Empty /> */}
            <div className="main-cart">
              <div className="title">
                <h3>Giỏ hàng</h3>
              </div>
              <div className="cart">
                <div className="item">
                  <div className="image">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_chicken-burger.png"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <span>Burger Gà Thượng Hạng</span>
                  </div>
                  <div className="quantity">
                    <span>1</span>
                  </div>
                  <div className="price">
                    <span>35.000đ</span>
                  </div>
                  <div className="remove">
                    <button>
                      <DeleteTwoTone />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_chicken-burger.png"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <span>Burger Gà Thượng Hạng</span>
                  </div>
                  <div className="quantity">
                    <span>1</span>
                  </div>
                  <div className="price">
                    <span>35.000đ</span>
                  </div>
                  <div className="remove">
                    <button>
                      <DeleteTwoTone />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_chicken-burger.png"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <span>Burger Tôm Thượng Hạng</span>
                  </div>
                  <div className="quantity">
                    <span>1</span>
                  </div>
                  <div className="price">
                    <span>35.000đ</span>
                  </div>
                  <div className="remove">
                    <button>
                      <DeleteTwoTone />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="image">
                    <img
                      src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_chicken-burger.png"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <span>Burger Doblue Double</span>
                  </div>
                  <div className="quantity">
                    <span>1</span>
                  </div>
                  <div className="price">
                    <span>35.000đ</span>
                  </div>
                  <div className="remove">
                    <button>
                      <DeleteTwoTone />
                    </button>
                  </div>
                </div>
                <div className="btn-pay">
                  <button>Thanh toán</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainCart;
