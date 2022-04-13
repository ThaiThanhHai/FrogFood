import { useState, useEffect } from "react";
import "./detail.css";

const Detail = () => {
  const [quantity, setQuantity] = useState(0);
  const handleMinute = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="detail-dish">
      <div className="field-back">
        <button type="button" title="Quay lại">
          ← Quay lại
        </button>
      </div>
      <div className="detail">
        <div className="field-img">
          <img
            alt="Burger Mozzarella "
            src="https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/584039753b87a8d227764e04fc461e3e/b/u/burger-534x374px_mozzarella-burger.png"
          />
        </div>
        <div className="field-content">
          <h3 className="field-name">Burger Mozzarella </h3>
          <div class="field-price">
            <span>59.000 đ</span>
          </div>
          <div className="quantity">
            <h3 className="lbl">Số lượng</h3>
            <div class="inner">
              <button
                class="btn-minute"
                type="button"
                onClick={() => setQuantity(handleMinute)}
              >
                -
              </button>
              <input type="number" readonly="" value={quantity} />
              <button
                class="btn-plus"
                type="button"
                onClick={() => setQuantity(handlePlus)}
              >
                +
              </button>
            </div>
          </div>
          <button class="btn" type="button" title="Thêm vào giỏ hàng">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
