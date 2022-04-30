import { ArrowBackRounded, Delete } from "@mui/icons-material";
import "./bought.css";

const Bought = () => {
  return (
    <div className="bought">
      <button className="btn-back">
        <ArrowBackRounded />
      </button>

      <h3 className="title">Lịch sủ đơn hàng</h3>
      <div className="item">
        <div className="stt">
          <span>1</span>
        </div>
        <div className="name">
          <span>Burger Tôm</span>
        </div>
        <div className="image">
          <img
            src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_shrimp-burger.png"
            alt=""
          />
        </div>
        <div className="date">
          <span>04-06-2022</span>
        </div>
        <div className="delete">
          <button className="btn-delete">
            <Delete />
          </button>
        </div>
      </div>
      <div className="item">
        <div className="stt">
          <span>1</span>
        </div>
        <div className="name">
          <span>Burger Tôm Càng Xanh</span>
        </div>
        <div className="image">
          <img
            src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_shrimp-burger.png"
            alt=""
          />
        </div>
        <div className="date">
          <span>04-06-2022</span>
        </div>
        <div className="delete">
          <button className="btn-delete">
            <Delete />
          </button>
        </div>
      </div>
      <div className="item">
        <div className="stt">
          <span>2</span>
        </div>
        <div className="name">
          <span>Burger Double Double</span>
        </div>
        <div className="image">
          <img
            src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_shrimp-burger.png"
            alt=""
          />
        </div>
        <div className="date">
          <span>04-06-2022</span>
        </div>
        <div className="delete">
          <button className="btn-delete">
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bought;
